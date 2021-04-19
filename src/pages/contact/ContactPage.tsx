import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
import PageTitle from '../components/text/PageTitle'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import { sendEmail } from '../../email/Mailer'

interface ContactProps extends WithStyles<typeof styles> { }

class Contact extends React.Component<ContactProps, any> {

    constructor(props: ContactProps) {
        super(props)
        this.state = {
            name: "",
            address: "",
            message: "",

            nameError: "",
            addressError: "",
            messageError: "",
        }
    }

    render() {
        const classes = this.props.classes
        return (
            <main data-testid="Contact-Page">
                <PageTitle title="CONTACT" src="https://picsum.photos/id/1058/1500/200" />
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <p className={classes.header}>
                            <b>Contact Me</b>
                            <br />
                            <br />
                            Please fill in this form and I will do my best to respond as soon as I can
                        </p>
                        <InputField errorText={this.state.nameError} onChange={this.handleNameUpdate.bind(this)} id="full-name" label="Full Name" />
                        <InputField errorText={this.state.addressError} onChange={this.handleAddressUpdate.bind(this)} id="address" label="Email Address" />
                        <InputField errorText={this.state.messageError} onChange={this.handleMessageUpdate.bind(this)} id="message" label="Message" multiLine={true} rows={8} />
                        <SubmitButton onSubmit={this.handleSubmit.bind(this)} />
                    </div>

                </div>
            </main>
        )
    }

    handleNameUpdate(inputName: string) {
        this.setState({
            name: (inputName) ? inputName : this.state.name,
        })
    }

    handleAddressUpdate(inputAddress: string) {
        this.setState({
            address: (inputAddress) ? inputAddress : this.state.address,
        })
    }

    handleMessageUpdate(inputMessage: string) {
        this.setState({
            message: (inputMessage) ? inputMessage : this.state.inputMessage
        })
    }

    handleSubmit() {
        const nameErrorUpdate = (this.state.name === "" || this.state.name === undefined) ? "required" : ""
        const addressErrorUpdate = (this.state.address === "" || this.state.address === undefined) ? "required" : ""
        const messageErrorUpdate = (this.state.message === "" || this.state.message === undefined) ? "required" : ""

        this.setState({
            nameError: nameErrorUpdate,
            addressError: addressErrorUpdate,
            messageError: messageErrorUpdate
        })

        if (nameErrorUpdate === "" && addressErrorUpdate === "" && messageErrorUpdate === "") {
            sendEmail(this.state.name, this.state.address, this.state.message)
        }
    }

}
const styles = () =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
        },
        wrapper: {
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '20px',

        },
        header: {
            fontFamily: 'Open-Sans-Regular',
            fontSize: '18px',
            width: '80%',
            alignSelf: 'center',
        }
    })

export default withStyles(styles)(Contact)
