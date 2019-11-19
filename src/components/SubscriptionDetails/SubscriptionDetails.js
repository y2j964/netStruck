import React from 'react';

export default function SubscriptionDetails() {
  return (
    <div className="subscription-details">
      <p className="subscription-details__text">
        This is not a real payment form.
      </p>
      <p className="subscription-details__text">
        Sorry, but we&apos;re breaking the forth wall on this one. Everything is
        an illusion. This sign up page is certainly an illusion, as I have
        nothing to sell, and I have no reason or mechanism for collecting user
        data about you. There is no sign up. There is no subscription. There are
        no transactions here. We will, however, go on with the charade of
        pretending that this is a real sign up form (we&apos;ll even print the
        submitted data to the console), but it&apos;s all smoke and mirrors.
      </p>
      <p className="subscription-details__text">
        If you are interested in purchasing a subscription to a similar service,
        let me direct you to{' '}
        <a className="underline" href="https://www.criterionchannel.com">
          The Criterion Channel
        </a>{' '}
        or{' '}
        <a className="underline" href="https://www.netflix.com">
          Netflix
        </a>
        .
      </p>
    </div>
  );
}
