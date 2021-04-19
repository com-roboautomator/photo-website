import { FormControl, TextField } from '@material-ui/core'
import { withStyles, createStyles, WithStyles } from '@material-ui/styles'
import React from 'react'

interface InputFieldProps extends WithStyles<typeof style> {
    label: string
    id: string
    multiLine?: boolean
    rows?: number
    errorText?: string
    onChange: (input: string) => void
}

class InputField extends React.Component<InputFieldProps, any>{

    render() {
        const classes = this.props.classes
        const props = this.props
        return (
            <div className={classes.container}>
                <FormControl fullWidth>
                    <TextField
                        id={this.props.id}
                        multiline={props.multiLine}
                        rows={props.rows}
                        onChange={(event) => props.onChange(event.target.value)}
                        label={props.label} variant='outlined'
                        error={props.errorText !== ""}
                        helperText={props.errorText}
                    />
                </FormControl>
            </div>
        )
    }
}

const style = () => createStyles({
    container: {
        width: '60%',
        alignSelf: 'center',
        padding: "10px",
        fontFamily: "Open-Sans-Regular"
    },
})

export default withStyles(style)(InputField)