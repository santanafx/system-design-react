import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
}

export const Button = ({ children, width }: ButtonProps) => {
  return (
    <button className={styles.button} style={{ width: width }}>
      {children}
    </button>
  );
};
