const CONVERSION_DESTINATION = 'AW-18287345437/YBAjCIOrp8kcEJ3-ipBE';

type Gtag = (...args: unknown[]) => void;

function reportPhoneConversion(url: string) {
  let hasNavigated = false;
  const navigate = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    window.location.href = url;
  };

  // Never let a blocked or slow Google request prevent the phone call.
  const fallback = window.setTimeout(navigate, 1500);
  const gtag = (window as Window & { gtag?: Gtag }).gtag;

  if (typeof gtag !== 'function') {
    window.clearTimeout(fallback);
    navigate();
    return;
  }

  gtag('event', 'conversion', {
    send_to: CONVERSION_DESTINATION,
    event_callback: () => {
      window.clearTimeout(fallback);
      navigate();
    },
    event_timeout: 1500,
  });
}

export function setupPhoneConversionTracking() {
  document.addEventListener(
    'click',
    (event) => {
      if (!(event.target instanceof Element)) return;

      const callLink = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!callLink) return;

      event.preventDefault();
      reportPhoneConversion(callLink.href);
    },
    { capture: true },
  );
}
