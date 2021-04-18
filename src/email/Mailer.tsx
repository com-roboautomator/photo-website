import emailjs from 'emailjs-com'
import {init} from 'emailjs-com'

export function sendEmail(from: string, emailAddress: string, message: string) {

    init('user_OU9aloTJnctZxt7YBvYsh')

    var templateParams = {
        to_name: "Sara",
        from_name: {from},
        message: {message}
    }

    emailjs.send('service_tjson1q', 'template_y2hwz3k', templateParams)
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    })

}

