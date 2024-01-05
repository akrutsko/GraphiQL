import RootType from '../RootType/RootType';
import { useTranslation } from '../../../../../hooks';

type RootTypesSectionProps = {
  queryType: string | null;
  mutationType: string | null;
  subscriptionType: string | null;
  openMethods: (root: string | null) => void;
};
const RootTypesSection = ({ queryType, mutationType, subscriptionType, openMethods }: RootTypesSectionProps) => {
  const translation = useTranslation();

  return (
    <>
      <h3 style={{ color: 'blue' }}>{translation.docs.rootType}</h3>
      <ul>
        <RootType root={queryType} onClick={() => openMethods(queryType)} />
        <RootType root={mutationType} onClick={() => openMethods(mutationType)} />
        <RootType root={subscriptionType} onClick={() => openMethods(subscriptionType)} />
      </ul>
    </>
  );
};

export default RootTypesSection;
