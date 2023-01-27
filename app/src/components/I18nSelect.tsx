import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from 'antd';
export const I18nSelect = () => {

    const { t, i18n } = useTranslation(['home', 'main']);

    const onClickLanguageChange = (e: any) => {
        console.log('hello', e)
        const language = e.target.value;
        i18n.changeLanguage(language); //change the language
    }

    const handleChange = (value: string) => {
        i18n.changeLanguage(value)
    };
      
    

    return(
        <div className="align">
        {/* <select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
        <option value="en" >English</option>
        <option value="es" >Spanish</option>
        <option value="fr" >French</option>
        </select> */}
        {/* <Dropdown
            label="Small dropdown"
            size="sm"
            onChange={handleChange}
        >
            <Dropdown.Item value="en">
            English
            </Dropdown.Item>
            <Dropdown.Item value="es">
            Spanish
            </Dropdown.Item>
            <Dropdown.Item value="fr">
            French
            </Dropdown.Item>
        </Dropdown> */}

            <Select
            defaultValue="en"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
            ]}
            />
            
        </div>
    );
}

