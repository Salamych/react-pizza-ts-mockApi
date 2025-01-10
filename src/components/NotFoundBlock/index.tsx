import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock(){
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br/>
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутсвует в нашем интернет-магазине</p>
    </div>
  );
}