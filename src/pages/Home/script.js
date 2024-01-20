import TxAuthWidget from 'https://libs-cdn.lime.co/auth-widget/@7.js'

console.log("Testtttt!!!!!!")
TxAuthWidget.getOrCreate({
  variant: 'spc',
  appName: 'Lime',
  appVersion: '1.0.0',
  lang: 'en',
  theme: 'light',
  env: "prod",
  registration: true,
  uiSettings: {initialRoute: "registration", hideLogo: true},
  config: {
      resources: {
          registerTerms: "https://lime.co/wp-content/uploads/2023/08/Paper-Trading-TC-August-2023.pdf"
      }
  },
  events: {
      onRegistrationWatch: (registration) => {
          // console.log(registration.status)
          if (registration.status === RegistrationStatus.PasswordEntered && registration.data) {
              // console.log(registration.data);
             
          }
      },
      onRegistrationSuccess: () => {


      }
  }
}).then((widget) => {
  widget.subscribeJWT((response) => {

      if (response) {
          widget.unmount();
          setLoginSuccess(true)
          window.location.href = 'https://myaccount.lime.co'
      } else {
          widget.mount(root);
          setLoginSuccess(false)

      }

  });
});