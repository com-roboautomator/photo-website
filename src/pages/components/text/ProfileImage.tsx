import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import React from 'react'
import Image from '../../../assets/images/SaraDoneuxImage.jpg'

interface ProfileImageProps extends WithStyles<typeof styles> {

}

class ProfileImage extends React.Component<ProfileImageProps> {

    render() {
        const classes = this.props.classes

        return (
            <div className={classes.container}>
                <img className={classes.image} src={Image} alt="" />
                <div className={classes.text}>
                    Sara Doneux
                </div>
            </div>
        )
    }

}

const styles = () => createStyles({
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
        marginTop: '5px'
    },
})

export default withStyles(styles)(ProfileImage)