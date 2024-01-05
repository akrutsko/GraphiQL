import styles from '../../ListOfDocumentation.module.css';

type RootTypeProps = {
  root: string | null;
  onClick: (root: string | null) => void;
};
const RootType = ({ root, onClick }: RootTypeProps) => {
  if (root)
    return (
      <li onClick={() => onClick(root)}>
        {root.toLowerCase()}:{' '}
        <span className={styles.link} style={{ color: '#918b3b', cursor: 'pointer' }}>
          {root}
        </span>
      </li>
    );
};

export default RootType;
