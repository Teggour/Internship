import React from 'react';
import styled from 'styled-components'

export const FormErrorMessage = styled.div`
  margin-top: 5px;
  color: rgba(255, 0, 0, 0.95);
`;

function ErrorMessageForm({ children, ...props }) {
    return (
        <>
            <FormErrorMessage {...props}>{children}</FormErrorMessage>
        </>
    )
}

export default ErrorMessageForm;
