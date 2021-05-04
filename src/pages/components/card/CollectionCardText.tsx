import {WithStyles, withStyles, createStyles} from '@material-ui/styles'
import React from 'react'
import CollectionTag from './CollectionTag'
import imageIcon from '../../../assets/images/icons/collection-image-o.png'

interface CollectionCardTextProps extends WithStyles<typeof styles> {
    title: string
    tagTitle?: string
    tagColour?: string
}

class CollectionCardText extends React.Component<CollectionCardTextProps> {
    render() {
        const props = this.props
        const classes = this.props.classes

        return (
            <div
                data-testid="Collection-Card-Text-Wrapper"
                className={classes.text_wrapper}>
                <img
                    data-testid="Collection-Card-Image-Icon"
                    className={classes.icon}
                    src={imageIcon}
                    alt=""
                    width={20}
                    height={20}
                />
                <p data-testid="Collection-Card-Title" className={classes.text}>
                    {props.title}
                </p>
                <div className={classes.tag}>
                    <CollectionTag
                        colour={props.tagColour}
                        title={props.tagTitle}
                    />
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        image: {
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
        },
        text_wrapper: {
            position: 'relative',
            zIndex: 99,
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            fontSize: '100%',
            color: 'black',
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            borderTop: '1px solid gray',
            height: '45px',
        },
        icon: {
            paddingLeft: '20px',
            alignSelf: 'center',
        },
        text: {
            fontFamily: 'Open-Sans-Regular',
            fontStyle: 'normal',
            textAlign: 'left',
            position: 'relative',
            paddingLeft: '10px',
            width: '75%',
            alignSelf: 'center',
        },
        tag: {
            position: 'relative',
            paddingLeft: '10px',
            paddingRight: '20px',
            width: '25%',
            alignSelf: 'center',
        },
    })

export default withStyles(styles)(CollectionCardText)
