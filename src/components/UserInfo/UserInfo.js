import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedTextInput,
  AnimatedEmailInput,
  AnimatedPasswordInput,
} from '../InputAnimated/InputAnimated';
import CheckBox from '../CheckBox';

export default function UserInfo({ subscription }) {
  const [nameFocus, setNameFocus] = useState(false);
  const [nameValue, setNameValue] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  const [permissionCheck, setPermissionCheck] = useState(true);

  const submitForm = e => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(
      `name: ${nameValue}; email: ${emailValue}; password: ${passwordValue}; emailPreference: ${
        permissionCheck ? "send 'em" : "don't send 'em"
      }; subscription: ${subscription}`,
    );
  };

  return (
    <div className='p-5 sm:pb-16 sm:pt-10 sm:px-20 bg-white rounded'>
      <h2 className='text-center text-xl sm:text-2xl font-bold mb-6'>
        Start your 14-day free trial
      </h2>
      <form action='' onSubmit={submitForm}>
        <AnimatedTextInput
          labelText={'Name'}
          name={'accountName'}
          id={'accountName'}
          isRequired={true}
          value={nameValue}
          handleValueChange={e => setNameValue(e.target.value)}
          isFocused={nameFocus}
          handleFocus={() => setNameFocus(true)}
          handleBlur={() => setNameFocus(false)}
        />
        <AnimatedEmailInput
          labelText={'Email'}
          name={'accountEmail'}
          id={'accountEmail'}
          isRequired={true}
          value={emailValue}
          handleValueChange={e => setEmailValue(e.target.value)}
          isFocused={emailFocus}
          handleFocus={() => setEmailFocus(true)}
          handleBlur={() => setEmailFocus(false)}
        />
        <AnimatedPasswordInput
          labelText={'Password'}
          name={'accountPassword'}
          id={'accountPassword'}
          isRequired={true}
          minLength='8'
          value={passwordValue}
          handleValueChange={e => setPasswordValue(e.target.value)}
          isFocused={passwordFocus}
          handleFocus={() => setPasswordFocus(true)}
          handleBlur={() => setPasswordFocus(false)}
        />
        <CheckBox
          name='updatePermission'
          id='updatePermission'
          isChecked={permissionCheck}
          handleCheckChange={() => setPermissionCheck(!permissionCheck)}
        >
          I agree to receive newsletters and product updates from NetStruck
        </CheckBox>
        <button className='user-info__submission'>Continue</button>
        <p className='user-info__small-print'>
          By registering you agree to our
          <span className='block text-center text-xs text-blue-500'>
            Terms, Cookies Policy <span className='text-black'>&</span> Privacy
            Policy
          </span>
          and represent that you are at least 16 years of age.
        </p>
      </form>
    </div>
  );
}

UserInfo.propTypes = {
  subscription: PropTypes.string.isRequired,
};
