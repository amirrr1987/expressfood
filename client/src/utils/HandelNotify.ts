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
      icon: 'warning',
      color: 'white',
      textColor: 'red',
    })
    Notify.create(message)
  }

  Success({ message }: { message: string }) {
    Notify.setDefaults({
      position: 'top',
      timeout: 3000,
      icon: 'warning',
      color: 'white',
      textColor: 'green',
    })
    Notify.create(message)
  }

}
export default new NotifyClass