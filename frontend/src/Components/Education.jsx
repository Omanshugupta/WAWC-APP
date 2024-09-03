import React from 'react';
import styles from './education.module.css'; // Ensure you have this CSS file for styling

const Education = () => {
  return (
    <div className={styles.education}>
      <h1 className={styles.heading}>Education</h1>
      <h1 className={styles.heading2}><center>Education Of Beauty Therapy</center></h1>

      <div className={styles.content}>
        <p className={styles.paragraph}>
          Discover our comprehensive range of education programs tailored to meet your needs. 
          We offer diverse courses designed to enhance your skills and knowledge in various fields.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum?
          <p className={styles.paragraph}> Velit commodi error aspernatur modi provident pariatur at nulla. Nostrum ipsa aliquid modi debitis quo ex atque, culpa cupiditate eos. Nihil earum laboriosam, deleniti obcaecati nobis quae eos placeat deserunt animi, sapiente fugit officia impedit pariatur nemo ut adipisci non quisquam, alias iusto voluptatum! Atque quia voluptatum cumque! Unde nam eligendi commodi! Autem voluptate aliquid veniam commodi rem hic omnis tempora, at illo aut non perspiciatis nam nisi ex assumenda, sed facere accusamus numquam consequatur est qui ut delectus velit quas! Deserunt ut fugit beatae obcaecati in culpa tempora assumenda.</p>
        </p>
        <img src="../assets/Education.jpeg" alt="Education" className={styles.image} />
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>Category 1</div>
        <div className={styles.category}>Category 2</div>
        <div className={styles.category}>Category 3</div>
        <div className={styles.category}>Category 4</div>
        <div className={styles.category}>Category 5</div>
        <div className={styles.category}>Category 6</div>
      </div>
    </div>
  );
};

export default Education;
