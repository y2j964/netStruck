import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    console.log(
      `name: ${nameValue}; email: ${emailValue}; password: ${passwordValue}; emailPreference: ${
        permissionCheck ? "send 'em" : "don't send 'em"
      }; subscription: ${subscription}`,
    );
  };

  return (
    <div className='pb-16 pt-10 px-20 bg-white rounded'>
      <h2 className='text-center text-2xl font-bold mb-6'>
        Start your 14-day free trial
      </h2>
      <form action='' onSubmit={submitForm}>
        <div className='user-info__form-group'>
          <label
            htmlFor='accountName'
            className={`animated-label${
              nameFocus || nameValue ? ' animated-label--is-shrunk' : ''
            }`}
          >
            Name
          </label>
          <input
            type='text'
            name='accountName'
            className='user-info__input'
            id='accountName'
            aria-required='true'
            required
            value={nameValue}
            onChange={e => setNameValue(e.target.value)}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          />
        </div>
        <div className='user-info__form-group'>
          <label
            htmlFor='accountEmail'
            className={`animated-label${
              emailFocus || emailValue ? ' animated-label--is-shrunk' : ''
            }`}
          >
            Email
          </label>
          <input
            type='email'
            name='accountEmail'
            className='user-info__input'
            id='accountEmail'
            aria-required='true'
            required
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </div>
        <div className='user-info__form-group'>
          <label
            htmlFor='accountPassword'
            className={`animated-label${
              passwordFocus || passwordValue ? ' animated-label--is-shrunk' : ''
            }`}
          >
            Password
          </label>
          <input
            type='password'
            name='accountPassword'
            className='user-info__input'
            id='accountPassword'
            aria-required='true'
            required
            minLength='8'
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
        </div>
        <div className='mb-6'>
          <input
            type='checkbox'
            name='updatePermission'
            className='mr-2'
            id='updatePermission'
            checked={permissionCheck}
            onChange={() => setPermissionCheck(!permissionCheck)}
            aria-checked='true'
          />
          <label htmlFor='updatePermission'>
            I agree to receive newletters and product upadates from NetStruck
          </label>
        </div>
        <button className='user-info__submission'>Continue</button>
        <p className='text-center text-xs'>
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
