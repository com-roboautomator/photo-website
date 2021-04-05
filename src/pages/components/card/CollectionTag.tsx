import React from 'react'

interface CollectionTagProps {
    title: string
    colour: string
}

class CollectionTag extends React.Component<CollectionTagProps>{

    render() {
        return (
            <div style={{
                background: this.props.colour,
                borderTopLeftRadius: '7px',
                borderTopRightRadius: '7px',
                borderBottomLeftRadius: '7px',
                borderBottomRightRadius: '7px',
                fontFamily: 'Open-Sans-Bold',
                fontSize: 14,
                paddingTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
                textAlign: 'center',
                color: 'white',
            }}>
                {this.props.title}
            </div>
        );
    }
}

export default (CollectionTag)