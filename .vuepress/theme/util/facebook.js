let promise
export function initializeFacebook() {
  if (promise) return promise

  /** @type {any} */
  var global = window

  promise = new Promise(resolve => {
    Object.assign(window, {
      fbAsyncInit: function() {
        global.FB.init({
          appId: '1691631784411098',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v3.0',
        })
        resolve(global.FB)
      },
    })
    ;(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      // @ts-ignore
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  })

  return promise
}
