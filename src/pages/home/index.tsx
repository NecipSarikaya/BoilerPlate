import React from 'react';
import { Button, Checkbox, Input, TextArea } from 'components/';
import { useTranslation } from 'react-i18next';
import { FormatNumber } from '@/utils/FormatNumber';

function HomePage(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Button variant="contained" color="primary" />
      <Input label="test" value="asd" />
      <Checkbox id="test" labelPosition="right" label="label" />
      <Checkbox labelPosition="left" label="label" />
      <Checkbox labelPosition="top" label="label" />
      <Checkbox labelPosition="bottom" label="label" />
      <TextArea />
      <p className="text-center font-bold">{t('lang')}</p>
      <p className="text-center font-bold">{t('desc.desc1')}</p>
      <p className="text-center font-bold">
        {FormatNumber(123213.12312312312, 'en', 6)}
      </p>
    </div>
  );
}

export default HomePage;
