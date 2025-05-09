import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from "@mui/material";

export default function EmptyTextarea(props) {

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            width: '100%',
            fontSize: '0.875rem',
            padding: '12px',
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.text.primary,
            background: theme.palette.background.stepform,
            border: '1px solid',
            '&:hover, &:focus': {
                color: theme.palette.text.hover
            },
            '&:active': {
                color: theme.palette.text.active,
                textDecoration: 'underline',
            },
        })
        // width: 100%;
        // font-family: IBM Plex Sans, sans-serif;
        // font-size: 0.875rem;
        // font-weight: 400;
        // line-height: 1.5;
        // padding: 12px;
        // border-radius: ${theme.shape.borderRadius};
        // color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        // background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        // border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        // box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

        // &:hover {
        //   border-color: ${blue[400]};
        // }

        // &:focus {
        //   border-color: ${blue[400]};
        //   box-shadow: 0 0 0 2px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        // }

        // // firefox
        // &:focus-visible {
        //   outline: 0;
        // }
    );

    return (
        <StyledTextarea
            {...props}
        // minRows={3}
        // aria-label="maximum height"
        // placeholder="Maximum 4 rows"
        />
    );
}
