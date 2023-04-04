import { Notify } from 'quasar';



class NotifyClass {

  Warning({ message }: { message: string }) {
    Notify.setDefaults({
      position: 'top',
      timeout: 3000,
      icon: 'warning',
      color: 'white',
      textColor: 'yellow',
    })
    Notify.create(message)
  }

  Error({ message }: { message: string }) {
    Notify.setDefaults({
      position: 'top',
      timeout: 3000,
      icon: 'error',
      color: 'white',
      textColor: 'red',
    })
    Notify.create(message)
  }

  Success({ message }: { message: string }) {
    Notify.setDefaults({
      position: 'top',
      timeout: 3000,
      icon: 'check_circle',
      color: 'white',
      textColor: 'green',
    })
    Notify.create(message)
  }
  Info({ message }: { message: string }) {
    Notify.setDefaults({
      position: 'top',
      timeout: 3000,
      icon: 'info',
      color: 'white',
      textColor: 'blue',
    })
    Notify.create(message)
  }

}
export default new NotifyClass