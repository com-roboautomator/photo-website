import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import PageTitle from '../components/text/PageTitle'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import {sendEmail} from '../../email/Mailer'
import {RouterProps} from 'react-router-dom'

interface ContactProps extends WithStyles<typeof styles> {
    // for testing purposes. However may become useful for prefilled form
    presetName?: string
    presetAddress?: string
    presetMessage?: string
}

class Contact extends React.Component<ContactProps & RouterProps, any> {
    constructor(props: ContactProps & RouterProps) {
        super(props)
        this.state = {
            name: this.props.presetName,
            address: this.props.presetAddress,
            message: this.props.presetMessage,

            nameError: '',
            addressError: '',
            messageError: '',
        }
    }

    render() {
        const classes = this.props.classes
        return (
            <main data-testid="Contact-Page">
                <PageTitle
                    title="CONTACT"
                    src="https://doneux-website.s3.eu-west-2.amazonaws.com/fd1f733e-2cdf-46ec-b1eb-3e5e55a98a93.jpg"
                />
                <div className={classes.container}>
                    <div className={classes.wrapper}>
                        <p className={classes.header}>
                            <b>Contact Me</b>
                            <br />
                            <br />
                            Please fill in this form and I will do my best to
                            respond as soon as I can
                        </p>
                        <InputField
                            errorText={this.state.nameError}
                            onChange={this.handleNameUpdate.bind(this)}
                            label="Full Name"
                            value={this.state.name}
                        />
                        <InputField
                            errorText={this.state.addressError}
                            onChange={this.handleAddressUpdate.bind(this)}
                            label="Email Address"
                            value={this.state.address}
                        />
                        <InputField
                            errorText={this.state.messageError}
                            onChange={this.handleMessageUpdate.bind(this)}
                            label="Message"
                            value={this.state.message}
                            rows={8}
                        />
                        <SubmitButton onSubmit={this.handleSubmit.bind(this)} />
                    </div>
                </div>
            </main>
        )
    }

    nextPath(path: string | undefined) {
        if (path === undefined) return
        this.props.history.push(path)
    }

    handleNameUpdate(inputName: string) {
        this.setState({
            name: inputName ? inputName : this.state.name,
        })
    }

    handleAddressUpdate(inputAddress: string) {
        this.setState({
            address: inputAddress ? inputAddress : this.state.address,
        })
    }

    handleMessageUpdate(inputMessage: string) {
        this.setState({
            message: inputMessage ? inputMessage : this.state.inputMessage,
        })
    }

    handleSubmit() {
        const nameErrorUpdate =
            this.state.name === '' || this.state.name === undefined
                ? 'required'
                : ''
        const addressErrorUpdate =
            this.state.address === '' || this.state.address === undefined
                ? 'required'
                : ''
        const messageErrorUpdate =
            this.state.message === '' || this.state.message === undefined
                ? 'required'
                : ''

        this.setState({
            nameError: nameErrorUpdate,
            addressError: addressErrorUpdate,
            messageError: messageErrorUpdate,
        })

        if (
            nameErrorUpdate === '' &&
            addressErrorUpdate === '' &&
            messageErrorUpdate === ''
        ) {
            //email submission has been successful - update page to contact, reset values and confirmation then send email
            this.nextPath('/contact/confirmation')
            // resetting values is important for tests
            this.setState({
                name: '',
                address: '',
                message: '',
            })
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
        },
    })

export default withStyles(styles)(Contact)
