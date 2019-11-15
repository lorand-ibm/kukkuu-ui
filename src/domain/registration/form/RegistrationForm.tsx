import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';

import styles from './registrationForm.module.scss';
import Button from '../../../common/components/button/Button';
import InputField from '../../../common/components/form/fields/input/InputField';
import SelectField from '../../../common/components/form/fields/select/SelectField';
import submitChildMutationQuery from '../mutations/submitChild';
import { setFormValues } from '../state/RegistrationActions';
import { RegistrationFormValues } from '../types/RegistrationTypes';
import { StoreState } from '../../app/types/AppTypes';
import { registrationFormDataSelector } from '../state/RegistrationSelectors';
import { formatTime, newMoment } from '../../../common/time/utils';
import { DEFAULT_DATE_FORMAT } from '../../../common/time/TimeConstants';
import EnhancedInputField from '../../../common/components/form/fields/input/EnhancedInputField';

interface Props {
  setFormValues: (values: RegistrationFormValues) => void;
  initialValues: RegistrationFormValues;
}

const RegistrationForm: FunctionComponent<Props> = ({
  setFormValues,
  initialValues,
}) => {
  // TODO: Do something with the data we get from the backend.
  const [submitChild] = useMutation(submitChildMutationQuery);
  const { t } = useTranslation();

  return (
    <div className={styles.registrationForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={e => {
          setFormValues(e);
          try {
            submitChild({
              variables: {
                birthdate: e.child.birthdate,
                firstName: e.child.firstName,
                lastName: e.child.lastName,
                guardianFirstName: e.guardian.firstName,
                guardianLastName: e.guardian.lastName,
                email: e.guardian.email,
              },
            });
          } catch (err) {
            // TODO: Error handling.
            // eslint-disable-next-line no-console
            console.error(err);
          }
        }}
      >
        {({ values, handleChange, isSubmitting, handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.childInfo}>
              <EnhancedInputField
                type="text"
                name="child.birthdate"
                label={t('registration.form.child.birthdate.input.label')}
                onChange={handleChange}
                value={formatTime(
                  newMoment(values.child.birthdate),
                  DEFAULT_DATE_FORMAT
                )}
                component={InputField}
                disabled={true}
                placeholder={t(
                  'registration.form.child.birthdate.input.placeholder'
                )}
              />
              <EnhancedInputField
                type="text"
                name="child.homeCity"
                label={t('registration.form.child.homeCity.input.label')}
                onChange={handleChange}
                value={values.child.homeCity}
                component={InputField}
                placeholder={t(
                  'registration.form.child.homeCity.input.placeholder'
                )}
              />
              <div className={styles.childName}>
                <EnhancedInputField
                  type="text"
                  name="child.firstName"
                  label={t('registration.form.child.firstName.input.label')}
                  onChange={handleChange}
                  value={values.child.firstName}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.firstName.input.placeholder'
                  )}
                />
                <EnhancedInputField
                  type="text"
                  name="child.lastName"
                  label={t('registration.form.child.lastName.input.label')}
                  onChange={handleChange}
                  value={values.child.lastName}
                  component={InputField}
                  placeholder={t(
                    'registration.form.child.lastName.input.placeholder'
                  )}
                />
              </div>
            </div>

            <div className={styles.guardianInfo}>
              <EnhancedInputField
                type="text"
                name="guardian.email"
                label={t('registration.form.guardian.email.input.label')}
                onChange={handleChange}
                value={values.guardian.email}
                component={InputField}
                placeholder={t(
                  'registration.form.guardian.email.input.placeholder'
                )}
              />

              <EnhancedInputField
                type="text"
                name="guardian.phoneNumber"
                label={t('registration.form.guardian.phoneNumber.input.label')}
                onChange={handleChange}
                value={values.guardian.phoneNumber}
                component={InputField}
                placeholder={t(
                  'registration.form.guardian.phoneNumber.input.placeholder'
                )}
              />
              <div className={styles.guardianName}>
                <EnhancedInputField
                  type="text"
                  name="guardian.firstName"
                  label={t('registration.form.guardian.firstName.input.label')}
                  onChange={handleChange}
                  value={values.guardian.firstName}
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.firstName.input.placeholder'
                  )}
                />
                <EnhancedInputField
                  type="text"
                  name="guardian.lastName"
                  label={t('registration.form.guardian.lastName.input.label')}
                  onChange={handleChange}
                  value={values.guardian.lastName}
                  component={InputField}
                  placeholder={t(
                    'registration.form.guardian.lastName.input.placeholder'
                  )}
                />
              </div>
              <EnhancedInputField
                name="guardian.relationship"
                label={t('registration.form.guardian.relationship.input.label')}
                onChange={handleChange}
                value={values.guardian.relationship}
                component={SelectField}
                id="registration.form.guardian.relationship.select"
                options={[
                  { label: 'Parents', value: 'parents' },
                  { label: 'Spouse', value: 'spouse' },
                ]}
                placeholder={t(
                  'registration.form.guardian.relationship.input.placeholder'
                )}
              />
              <EnhancedInputField
                type="checkbox"
                checked={values.verifyInformation}
                name="verifyInformation"
                label={t('registration.form.verifyInformation.input.label')}
                onChange={handleChange}
                component={InputField}
                value={values.verifyInformation}
              />
            </div>

            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || !isValid}
            >
              {t('homePage.hero.buttonText')}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const actions = {
  setFormValues,
};

const mapStateToProps = (state: StoreState) => ({
  initialValues: registrationFormDataSelector(state),
});

export const UnconnectedRegistrationForm = RegistrationForm;

export default connect(
  mapStateToProps,
  actions
)(RegistrationForm);
