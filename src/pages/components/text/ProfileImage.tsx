import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import Image from '../../../assets/images/SaraDoneuxImage.jpg'

interface ProfileImageProps extends WithStyles<typeof styles> {}

class ProfileImage extends React.Component<ProfileImageProps> {
    render() {
        const classes = this.props.classes

        return (
            <div
                data-testid="ProfileImage-Container"
                className={classes.container}>
                <img
                    data-testid="ProfileImage-Image"
                    className={classes.image}
                    src={Image}
                    alt=""
                />
                <div data-testid="ProfileImage-Text" className={classes.text}>
                    Sara Doneux
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            width: '150px',
        },
        image: {
            height: '150px',
            width: '150px',
            borderRadius: '100%',
        },
        text: {
            textAlign: 'center',
            fontFamily: 'Open-Sans-Bold',
            fontSize: '18px',
            marginTop: '5px',
            color: '#5f5f5f',
        },
    })

export default withStyles(styles)(ProfileImage)
