'use-client'

import { Input, Textarea } from "@chakra-ui/react"

interface FormsProps {
    placeholder?: string
    onChange: any
    type: string
}

export function Forms({ placeholder, onChange, type }: FormsProps) {
    return (
        <Input
            as="input"
            fontSize={"16px"}
            placeholder={placeholder}
            color={""}
            _placeholder={{
                color: ""
            }}
            border={"none"}
            borderRadius={"0px"}
            onChange={onChange}
            type={type}
        />
    )
}

interface TextFormProps {
    onChange: any
    type: any
}

export function TextForms({ onChange, type }: TextFormProps) {
    return (
        <Textarea
            as="input"
            fontSize={"16px"}
            border={"none"}
            _placeholder={{
                color: ""
            }}
            borderRadius={"0px"}
            placeholder={"Escreva sua mensagem"}
            color={""}
            onChange={onChange}
            type={type}
        />
    )
}
