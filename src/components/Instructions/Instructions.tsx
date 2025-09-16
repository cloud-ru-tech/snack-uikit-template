import styles from './styles.module.scss';

export function Instructions() {
  return (
    <main className={styles.instructions}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepContent}>
                <h3>Customize the theme</h3>
                <p>
                  Open file <code>src/app/global.scss</code> and paste copied code in section{' '}
                  <code>{'// INSERT YOUR CUSTOM COLORS'}</code>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.example}>
            <h4>Example code in global.scss:</h4>
            <pre className={styles.codeBlock}>
              {`// INSERT YOUR CUSTOM COLORS

.light {
  --sys-primary-background: #f0f9f5;
  --sys-primary-background1-level: #f4fdf9;
  // ... your colors
}

.dark {
  --sys-primary-background: #1c2420;
  --sys-primary-background1-level: #1b2923;
  // ... your colors
}`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
