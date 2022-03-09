import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/browser';
import { IconCheck, IconPen } from 'hds-react';

import GiveFeedbackButton from '../../../../common/components/giveFeedbackButton/GiveFeedbackButton';
import ErrorMessage from '../../../../common/components/error/Error';
import Button from '../../../../common/components/button/Button';
import { deleteChild_deleteChild as DeleteChildPayload } from '../../../api/generatedTypes/deleteChild';
import { UpdateChildMutationInput as EditChildInput } from '../../../api/generatedTypes/globalTypes';
import { updateChild_updateChild as EditChildPayload } from '../../../api/generatedTypes/updateChild';
import { childByIdQuery as ChildByIdResponse } from '../../../api/generatedTypes/childByIdQuery';
import { childByIdQuery } from '../../../child/queries/ChildQueries';
import LoadingSpinner from '../../../../common/components/spinner/LoadingSpinner';
import {
  deleteChildMutation,
  editChildMutation,
} from '../../../child/mutation/ChildMutation';
import ProfileEvents from '../../events/ProfileEvents';
import profileQuery from '../../queries/ProfileQuery';
import ProfileChildDetailEditModal from './modal/ProfileChildDetailEditModal';
import styles from './profileChildDetail.module.scss';
import { useProfileRouteGoBackTo } from '../../route/ProfileRoute';
import ListPageLayout from '../../../app/layout/ListPageLayout';
import KukkuuPill from '../../../../common/components/kukkuuPill/KukkuuPill';

export type ChildDetailEditModalPayload = Omit<EditChildInput, 'id'>;

const ProfileChildDetail = () => {
  const { t } = useTranslation();
  const params = useParams<{ childId: string }>();
  const history = useHistory();
  const goBackTo = useProfileRouteGoBackTo();
  const { loading, error, data } = useQuery<ChildByIdResponse>(childByIdQuery, {
    variables: {
      id: params.childId,
    },
  });

  const [deleteChild] = useMutation<DeleteChildPayload>(deleteChildMutation, {
    refetchQueries: [{ query: profileQuery }],
  });

  const [editChild] = useMutation<EditChildPayload>(editChildMutation, {
    refetchQueries: [
      { query: childByIdQuery, variables: { id: params.childId } },
    ],
  });

  const [isOpen, setIsOpen] = useState(false);
  if (loading) {
    return <LoadingSpinner isLoading={true} />;
  }

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    Sentry.captureException(error);
    return <ErrorMessage message={t('api.errorMessage')} />;
  }

  const child = data?.child;

  return (
    <ListPageLayout>
      {child ? (
        <>
          <ListPageLayout.Header
            title={
              child.firstName
                ? `${child.firstName} ${child.lastName}`
                : t('profile.child.default.name.text')
            }
            actions={
              <>
                <KukkuuPill
                  variant="success"
                  iconLeft={<IconCheck />}
                  name={t('profile.child.message.eventVisitsThisYear', {
                    eventVisitCount: 0,
                    allowedEventVisitCount: 2,
                  })}
                />
                <Button
                  variant="secondary"
                  onClick={() => setIsOpen(true)}
                  iconLeft={<IconPen />}
                >
                  {t('profile.edit.button.text')}
                </Button>
              </>
            }
            backButtonHref={goBackTo}
          />
          {isOpen && (
            <ProfileChildDetailEditModal
              setIsOpen={setIsOpen}
              childBeingEdited={child}
              editChild={async (payload: ChildDetailEditModalPayload) => {
                try {
                  await editChild({
                    variables: {
                      input: {
                        id: child.id,
                        ...payload,
                      },
                    },
                  });
                } catch (error) {
                  toast.error(t('registration.submitMutation.errorMessage'));
                  Sentry.captureException(error);
                }
              }}
              deleteChild={async () => {
                try {
                  const res = await deleteChild({
                    variables: {
                      input: {
                        id: child.id,
                      },
                    },
                  });

                  if (res) {
                    history.push('/profile');
                  }
                } catch (error) {
                  toast.error(t('registration.submitMutation.errorMessage'));
                  Sentry.captureException(error);
                }
              }}
            />
          )}
          <ProfileEvents child={child} />
        </>
      ) : (
        <div className={styles.noChild}>
          <p>{t('profile.children.noChild.text')}</p>
        </div>
      )}
      <GiveFeedbackButton />
    </ListPageLayout>
  );
};

export default ProfileChildDetail;
