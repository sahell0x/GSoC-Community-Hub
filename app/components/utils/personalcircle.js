import { Button, ButtonGroup, Col } from 'react-bootstrap';
import styles from '../../styles/Personacircle.module.css';

export default function Personacircle(props) {
  return (
    <>
      <Col
        className={`${styles.personas} d-flex flex-wrap justify-content-center`}
      >
        <span className={`${styles.persona}`}>
          <div className={styles.svg}>
            <svg
              //width='56'
              //height='60'
              viewBox='0 0 56 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.000305176 50.7962H36.6102V41.8344C36.6063 38.508 35.2551 35.3189 32.853 32.9668C30.4508 30.6147 27.1939 29.2916 23.7967 29.2878H12.8138C9.41662 29.2916 6.15972 30.6147 3.75756 32.9668C1.35541 35.3189 0.004181 38.508 0.000305176 41.8344V50.7962Z'
                fill='#A5C9FF'
              />
              <path
                d='M5.49179 12.8135C5.49179 15.3477 6.24329 17.8251 7.65125 19.9322C9.05921 22.0394 11.0604 23.6817 13.4018 24.6516C15.7431 25.6214 18.3195 25.8751 20.805 25.3807C23.2906 24.8863 25.5737 23.6659 27.3657 21.874C29.1577 20.082 30.3781 17.7988 30.8725 15.3132C31.3669 12.8277 31.1132 10.2513 30.1434 7.90996C29.1735 5.56861 27.5312 3.56742 25.424 2.15946C23.3169 0.751497 20.8395 0 18.3053 0C14.9069 0 11.6478 1.34999 9.24477 3.75298C6.84178 6.15597 5.49179 9.41512 5.49179 12.8135V12.8135Z'
                fill='#A5C9FF'
              />
              <path
                d='M55 40.2709C55 37.8384 53.0003 35.8845 50.5678 35.8845H49.8517V31.8049C49.8517 26.5718 45.5421 22.3389 40.2713 22.3389C35.0004 22.3389 30.6908 26.5718 30.6908 31.8049V35.8845H29.9748C27.5423 35.8845 25.5426 37.8384 25.5426 40.2709V53.8166C25.5426 56.2491 27.5423 58.203 29.9748 58.203H50.5678C53.0003 58.203 55 56.2491 55 53.8166V40.2709ZM36.123 31.8049C36.123 29.5692 37.9725 27.7253 40.2713 27.7253C42.5701 27.7253 44.4196 29.5692 44.4196 31.8049V35.8845H36.123V31.8049Z'
                fill='#1D74F5'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </div>
          <div className={styles.title}>Admin</div>
        </span>
        <span className={styles.persona}>
          <div className={styles.svg}>
            <svg
              //width='75'
              //height='56'
              viewBox='0 0 75 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.33333 8.11816C5.33333 5.99643 6.17618 3.9616 7.67647 2.46131C9.17677 0.961018 11.2116 0.118164 13.3333 0.118164H50.6667C52.7884 0.118164 54.8232 0.961018 56.3235 2.46131C57.8238 3.9616 58.6667 5.99643 58.6667 8.11816V29.4515C58.6667 31.5732 57.8238 33.6081 56.3235 35.1084C54.8232 36.6086 52.7884 37.4515 50.6667 37.4515H13.3333C11.2116 37.4515 9.17677 36.6086 7.67647 35.1084C6.17618 33.6081 5.33333 31.5732 5.33333 29.4515V8.11816Z'
                fill='#A5C9FF'
              />
              <path
                d='M2.66667 42.7849C1.95942 42.7849 1.28115 43.0659 0.781049 43.566C0.280952 44.0661 0 44.7443 0 45.4516C0 46.1588 0.280952 46.8371 0.781049 47.3372C1.28115 47.8373 1.95942 48.1182 2.66667 48.1182H61.3333C62.0406 48.1182 62.7189 47.8373 63.219 47.3372C63.7191 46.8371 64 46.1588 64 45.4516C64 44.7443 63.7191 44.0661 63.219 43.566C62.7189 43.0659 62.0406 42.7849 61.3333 42.7849H2.66667Z'
                fill='#A5C9FF'
              />
              <path
                d='M73.7778 45.564V54.0073H38V45.5634C38.0038 42.3229 39.2928 39.2162 41.5842 36.9248C43.8756 34.6334 46.9823 33.3444 50.2228 33.3406H61.555C64.7955 33.3444 67.9022 34.6334 70.1936 36.9248C72.4851 39.2163 73.7741 42.3233 73.7778 45.564Z'
                fill='#1D74F5'
                stroke='white'
                strokeWidth='2'
              />
              <path
                d='M45.7264 22.1307C44.3834 20.1208 43.6666 17.7577 43.6666 15.3404C43.6666 12.0989 44.9543 8.99009 47.2464 6.69798C49.5386 4.40586 52.6473 3.11816 55.8889 3.11816C58.3062 3.11816 60.6692 3.83499 62.6792 5.17798C64.6891 6.52098 66.2557 8.42984 67.1808 10.6632C68.1058 12.8965 68.3479 15.354 67.8763 17.7249C67.4047 20.0957 66.2406 22.2735 64.5313 23.9828C62.822 25.6922 60.6442 26.8562 58.2733 27.3278C55.9024 27.7994 53.4449 27.5574 51.2116 26.6323C48.9783 25.7072 47.0694 24.1407 45.7264 22.1307Z'
                fill='#1D74F5'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </div>
          <div className={styles.title}>Developer</div>
        </span>
        <span className={styles.persona}>
          <div className={styles.svg}>
            <svg
              //width='55'
              //height='54'
              viewBox='0 0 55 54'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 6.11816C0 2.80445 2.68629 0.118164 6 0.118164H39.4286C42.7423 0.118164 45.4286 2.80446 45.4286 6.11816V27.6488C45.4286 30.9625 42.7423 33.6488 39.4286 33.6488H6C2.68629 33.6488 0 30.9625 0 27.6488V16.8835V6.11816Z'
                fill='#A5C9FF'
              />
              <path
                d='M0 21.7527V18.5059C7.86871 23.1957 22.0324 32.5753 15.7374 32.5753C7.86871 32.5753 7.86871 34.1987 3.93435 39.0689C0.786871 42.965 0 40.6923 0 39.0689V21.7527Z'
                fill='#A5C9FF'
              />
              <path
                d='M23.3061 12.0977H47C50.866 12.0977 54 15.2317 54 19.0977V29.2149V39.3321C54 43.1981 50.866 46.3321 47 46.3321H23.3061C19.4401 46.3321 16.3061 43.1981 16.3061 39.3321V19.0977C16.3061 15.2317 19.4401 12.0977 23.3061 12.0977Z'
                fill='#1D74F5'
                stroke='white'
                strokeWidth='2'
              />
              <path
                d='M53 34.5775V31.4854C47.0985 35.9518 36.4757 44.8848 41.1969 44.8848C47.0985 44.8848 47.0985 46.4309 50.0492 51.0692C52.4098 54.7798 53 52.6153 53 51.0692V34.5775Z'
                fill='#1D74F5'
              />
            </svg>
          </div>
          <div className={styles.title}>Group Chat</div>
        </span>
        <span className={styles.persona}>
          <div className={styles.svg}>
            <svg
              //width='68'
              // height='54'
              viewBox='0 0 68 54'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M37.7778 42.4295H68V34.8739C67.9968 32.0695 66.8814 29.3809 64.8983 27.3978C62.9153 25.4148 60.2267 24.2993 57.4222 24.2961H48.3556C45.5511 24.2993 42.8625 25.4148 40.8795 27.3978C38.8964 29.3809 37.781 32.0695 37.7778 34.8739V42.4295Z'
                fill='#8EBAFA'
              />
              <path
                d='M42.3112 10.696C42.3112 12.7881 42.9315 14.8332 44.0938 16.5727C45.2561 18.3122 46.9082 19.668 48.841 20.4686C50.7738 21.2692 52.9007 21.4787 54.9526 21.0705C57.0045 20.6624 58.8893 19.6549 60.3686 18.1756C61.8479 16.6963 62.8554 14.8115 63.2635 12.7596C63.6716 10.7077 63.4622 8.58085 62.6616 6.64801C61.861 4.71517 60.5052 3.06315 58.7657 1.90084C57.0262 0.738541 54.981 0.118164 52.889 0.118164C50.0835 0.118164 47.393 1.23261 45.4093 3.21633C43.4256 5.20005 42.3112 7.89055 42.3112 10.696V10.696Z'
                fill='#8EBAFA'
              />
              <path
                d='M0 42.8072H30.2223V35.2516C30.2191 32.4472 29.1036 29.7586 27.1206 27.7755C25.1375 25.7925 22.4489 24.677 19.6445 24.6738H10.5778C7.77337 24.677 5.08473 25.7925 3.1017 27.7755C1.11867 29.7586 0.00319957 32.4472 0 35.2516V42.8072Z'
                fill='#8EBAFA'
              />
              <path
                d='M4.53339 11.0739C4.53339 13.166 5.15376 15.2111 6.31607 16.9506C7.47837 18.6901 9.1304 20.0459 11.0632 20.8465C12.9961 21.6471 15.1229 21.8566 17.1748 21.4484C19.2267 21.0403 21.1115 20.0329 22.5908 18.5535C24.0701 17.0742 25.0776 15.1894 25.4857 13.1375C25.8939 11.0856 25.6844 8.95878 24.8838 7.02594C24.0832 5.0931 22.7274 3.44108 20.9879 2.27877C19.2484 1.11647 17.2033 0.496094 15.1112 0.496094C12.3058 0.496094 9.61527 1.61054 7.63155 3.59426C5.64783 5.57798 4.53339 8.26848 4.53339 11.0739V11.0739Z'
                fill='#8EBAFA'
              />
              <path
                d='M51.889 43.9419V52.3852H16.1111V43.9413C16.115 40.7008 17.404 37.5941 19.6954 35.3027C21.9868 33.0113 25.0935 31.7224 28.334 31.7185H39.6662C42.9067 31.7224 46.0134 33.0113 48.3048 35.3027C50.5963 37.5943 51.8853 40.7012 51.889 43.9419Z'
                fill='#1D74F5'
                stroke='white'
                strokeWidth='2'
              />
              <path
                d='M23.8376 20.5084C22.4946 18.4985 21.7778 16.1354 21.7778 13.7181C21.7778 10.4766 23.0655 7.36778 25.3576 5.07566C27.6497 2.78355 30.7585 1.49585 34 1.49585C36.4173 1.49585 38.7804 2.21267 40.7903 3.55567C42.8003 4.89867 44.3668 6.80752 45.2919 9.04084C46.217 11.2742 46.459 13.7317 45.9874 16.1025C45.5158 18.4734 44.3518 20.6512 42.6424 22.3605C40.9331 24.0698 38.7553 25.2339 36.3845 25.7055C34.0136 26.1771 31.5561 25.935 29.3228 25.01C27.0894 24.0849 25.1806 22.5183 23.8376 20.5084Z'
                fill='#1D74F5'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </div>
          <div className={styles.title}>GSoC</div>
        </span>
      </Col>
    </>
  );
}
