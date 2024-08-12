import { useTranslation } from 'react-i18next';

export const useTranslatedOptions = () => {
  const { t } = useTranslation();

  return [
    { value: 'all', label: t('all') },
    { value: '5', label: t('5') },
    { value: '10', label: t('10') },
    { value: '20', label: t('20') },
  ];
};