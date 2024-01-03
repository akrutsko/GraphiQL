type RootTypeProps = {
  root: string | null;
  onClick: (root: string | null) => void;
};
const RootType = ({ root, onClick }: RootTypeProps) => {
  if (root)
    return (
      <li onClick={() => onClick(root)}>
        {root.toLowerCase()}: <span style={{ color: 'red', cursor: 'pointer' }}>{root}</span>
      </li>
    );
};

export default RootType;
