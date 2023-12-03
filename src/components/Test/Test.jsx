import { useTranslation } from 'react-i18next';

function Test() {

    const { t } = useTranslation();

  return (
    <div>
        <h1>{t('common.title')}</h1>
        <p>{t('common.paragraf')}</p>











    </div>
  );
}

export default Test;
