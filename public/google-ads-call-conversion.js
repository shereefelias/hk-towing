(function () {
  var CONVERSION_ID = 'AW-18287345437/YBAjCIOrp8kcEJ3-ipBE';

  window.gtag_report_conversion = function (url) {
    var hasNavigated = false;
    var callback = function () {
      if (hasNavigated || typeof url === 'undefined') return;
      hasNavigated = true;
      window.location.href = url;
    };

    // Do not let a blocked or slow Google tag prevent the phone call.
    var fallback = window.setTimeout(callback, 1500);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: CONVERSION_ID,
        event_callback: function () {
          window.clearTimeout(fallback);
          callback();
        },
        event_timeout: 1500
      });
    } else {
      window.clearTimeout(fallback);
      callback();
    }

    return false;
  };

  document.addEventListener('click', function (event) {
    if (!(event.target instanceof Element)) return;

    var callLink = event.target.closest('a[href^="tel:"]');
    if (!callLink || event.defaultPrevented) return;

    event.preventDefault();
    window.gtag_report_conversion(callLink.href);
  });
})();
