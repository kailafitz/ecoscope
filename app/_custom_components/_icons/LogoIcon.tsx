import { IconProps } from "@/app/interfaces";
import React from "react";
import PropTypes from "prop-types";

const LogoIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 121 117"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.781 108.094C91.6502 106.534 93.5653 105.026 95.3744 103.4C96.8486 102.074 98.2659 100.671 99.5847 99.1913C102.116 96.3518 104.438 93.3411 106.342 90.0357C107.399 88.2004 108.462 86.3593 109.364 84.4459C111.401 80.122 113.012 75.638 113.815 70.9088C114.222 68.5095 114.546 66.0891 114.757 63.6652C114.932 61.6519 115.02 59.6122 114.91 57.597C114.706 53.8439 114.152 50.1285 113.106 46.5045C112.269 43.6085 111.233 40.7965 109.925 38.0669C108.342 34.7655 106.504 31.6251 104.208 28.796C102.907 27.1929 101.269 25.8599 99.7566 24.4334C98.7673 23.5003 97.7822 22.5501 96.7049 21.7257C94.095 19.7286 91.4923 17.7119 88.7711 15.8742C86.7664 14.5203 84.5945 13.4089 82.4692 12.2401C79.9731 10.8674 77.2835 9.98468 74.5398 9.25868C74.4703 9.24028 74.3865 9.276 74.2938 9.28858C75.344 9.84884 76.3829 10.3902 77.4097 10.9536C79.287 11.9837 81.104 13.1417 83.0417 14.0401C86.9278 15.8419 90.3812 18.2809 93.6178 21.028C95.8962 22.9618 98.1268 24.9762 100.185 27.1393C102.739 29.8244 104.941 32.8097 106.852 36.0036C108.672 39.0472 110.139 42.258 111.223 45.6177C111.899 47.7122 112.266 49.9101 112.712 52.0739C113.285 54.8528 113.464 57.6804 113.324 60.5024C113.217 62.6486 112.838 64.781 112.589 66.9206C112.463 68.0055 112.345 69.0917 112.246 70.1793C111.947 73.4501 112.093 76.8165 110.788 79.8996C109.513 82.91 108.129 85.8968 106.508 88.7314C105.119 91.1613 103.353 93.3799 101.701 95.6537C101.06 96.5363 100.304 97.3423 99.5473 98.1326C98.3916 99.3401 97.2895 100.63 95.9864 101.659C93.578 103.561 91.0975 105.385 88.5383 107.078C86.5438 108.397 84.4333 109.565 82.288 110.626C78.0877 112.703 73.666 114.194 69.1763 115.549C64.7978 116.871 60.3579 116.826 55.8964 116.748C53.3634 116.703 50.8361 116.391 48.3027 116.306C43.9255 116.16 39.868 114.932 35.9433 113.046C31.4998 110.91 27.4477 108.16 23.4029 105.386C21.5327 104.103 19.6356 102.856 17.8145 101.507C17.1235 100.995 16.5931 100.257 16.023 99.5939C15.2447 98.6881 14.5432 97.7132 13.7304 96.8408C10.9258 93.8304 8.10626 90.8199 5.97257 87.2856C4.9144 85.5328 4.19518 83.576 3.3145 81.7153C2.76075 80.5454 2.21767 79.3692 1.62381 78.2197C0.761068 76.5496 0.123229 74.7868 0.0137682 72.9263C-0.0778048 71.3699 0.287123 69.8257 1.11725 68.2104C1.40231 69.3066 1.58439 70.2261 1.88114 71.1071C2.80949 73.8631 3.67411 76.6478 4.76325 79.3406C6.10328 82.6536 7.88822 85.7558 9.97671 88.6573C11.3851 90.6139 12.8768 92.5203 14.4542 94.3427C15.8996 96.0125 17.4398 97.6156 19.0633 99.1124C21.7894 101.626 24.6915 103.932 27.9028 105.813C29.7459 106.893 31.5616 108.035 33.4722 108.982C36.548 110.506 39.7122 111.863 43.0596 112.674C45.7898 113.335 48.5537 113.868 51.3171 114.379C54.0849 114.892 56.8956 114.962 59.6987 114.851C62.8935 114.724 66.0805 114.391 69.1709 113.547C71.6495 112.869 74.1372 112.15 76.5101 111.179C80.1124 109.705 83.5953 107.975 86.6057 105.41C88.3573 103.918 90.2541 102.597 92.0614 101.169C93.1211 100.331 94.167 99.4701 95.1589 98.5542C96.6671 97.1616 98.1804 95.7664 99.5881 94.2746C101.798 91.9325 103.849 89.4229 105.147 86.4626C106.073 84.353 106.686 82.0947 107.308 79.8663C107.997 77.3942 108.599 74.8933 109.122 72.3805C109.475 70.6839 109.697 68.9514 109.847 67.2237C110.03 65.1118 110.223 62.9823 110.141 60.8709C110.058 58.7272 109.789 56.5663 109.349 54.466C108.456 50.2114 106.845 46.1926 104.913 42.3052C103.116 38.6901 101.398 35.0307 99.4443 31.502C98.7161 30.1868 97.5394 29.0385 96.3541 28.0768C94.5326 26.5991 92.5541 25.307 90.5886 24.0178C89.5569 23.3412 88.4111 22.8383 87.2406 22.2075C87.093 22.1502 87.0215 22.1425 86.95 22.1347C86.9933 22.2109 87.0365 22.2871 87.0798 22.3633C89.1855 24.0068 91.0885 25.8529 92.8864 27.835C95.1449 30.3249 97.0493 33.0616 98.7029 35.9559C99.8852 38.0253 100.835 40.2385 101.757 42.4429C103.152 45.7807 104.103 49.2667 104.751 52.8215C105.082 54.6313 105.272 56.4735 105.409 58.3097C105.582 60.6419 105.733 62.984 105.709 65.3199C105.692 66.9136 105.359 68.504 105.105 70.0838C105.042 70.0718 105.044 70.0728 105.044 70.0728C105.171 67.1932 105.447 64.3107 105.389 61.4349C105.311 57.5914 104.564 53.8133 103.402 50.1547C102.524 47.391 101.525 44.6467 100.329 42.0078C98.8385 38.72 96.8245 35.7306 94.3159 33.1014C93.8309 32.5931 93.381 32.0514 92.8993 31.5399C92.733 31.3633 92.5194 31.2313 92.3273 31.0789C92.2686 31.1317 92.2098 31.1845 92.151 31.2374C92.4869 31.6863 92.8085 32.1466 93.1608 32.5822C96.2516 36.405 98.4978 40.6955 99.9083 45.3801C100.671 47.9131 101.21 50.5374 101.578 53.1587C101.933 55.6859 102.064 58.2628 102.055 60.8169C102.047 62.8333 101.689 64.8496 101.465 66.8637C101.114 70.0301 100.289 73.0917 99.2291 76.0794C97.6103 80.6435 95.373 84.8883 92.4504 88.771C90.8409 90.9092 89.0533 92.8777 87.1159 94.7101C85.139 96.5798 82.8293 98.0032 80.5626 99.4882C75.924 102.527 70.8892 104.64 65.5791 106.174C62.5024 107.063 59.3861 107.539 56.1903 107.764C51.8365 108.07 47.7709 107.075 43.7461 105.606C41.1795 104.67 38.5277 103.956 35.9958 102.94C34.6136 102.384 33.3317 101.499 32.1284 100.597C30.115 99.0883 28.1692 97.4842 26.2562 95.8485C25.0013 94.7755 23.802 93.6255 22.669 92.424C19.5987 89.1682 16.8574 85.6512 14.5844 81.7876C12.2334 77.7914 10.2432 73.6246 9.01896 69.1387C8.39559 66.8544 7.87527 64.5349 7.45434 62.2049C7.15956 60.5732 7.08015 58.8991 6.96335 57.2397C6.8639 55.8269 6.72769 54.3998 6.82333 52.9938C6.9765 50.7418 7.29373 48.5003 7.56763 46.2575C7.92563 43.326 8.81629 40.5292 9.81167 37.7664C10.2292 36.6076 10.7337 35.4785 11.2315 34.3504C12.9077 30.5522 15.0485 27.015 17.6359 23.787C19.5625 21.3835 21.6125 19.0467 23.8402 16.9244C27.1482 13.7729 30.9401 11.2136 34.8088 8.78782C36.4024 7.78857 37.9712 6.73169 39.6435 5.8828C40.607 5.39374 41.7559 5.27214 42.8194 4.97778C45.8954 4.12636 48.9725 3.27917 52.045 2.41511C54.6927 1.67048 57.3278 1.02074 60.128 0.965474C64.1666 0.885759 68.0634 1.48932 71.8639 2.76295C74.4002 3.61292 76.8769 4.6403 79.4112 5.49686C80.623 5.90645 81.9107 6.08756 83.1571 6.3999C87.4024 7.46378 91.188 9.49056 94.7479 11.9789C98.2691 14.4402 101.284 17.4697 104.255 20.5408C106.754 23.1247 108.763 26.0851 110.665 29.1207C113.25 33.2458 115.432 37.5884 117.567 41.9542C118.718 44.308 119.517 46.7889 119.851 49.3974C120.141 51.6628 120.413 53.9314 120.639 56.2038C120.795 57.7629 120.907 59.3297 120.952 60.8956C121.005 62.7474 121.028 64.6049 120.945 66.4545C120.874 68.0373 120.636 69.6128 120.462 71.1905C120.456 71.2435 120.351 71.2856 120.179 71.4232C120.179 70.4312 120.161 69.5349 120.185 68.6399C120.201 68.0678 120.312 67.4983 120.325 66.9264C120.39 64.1115 120.443 61.2963 120.488 58.481C120.547 54.7639 119.768 51.1844 118.816 47.6125C117.691 43.3952 116.087 39.375 113.955 35.5928C112.427 32.8824 110.714 30.2574 108.872 27.7491C107.335 25.6554 105.53 23.7518 103.775 21.8264C101.351 19.1667 98.5947 16.8865 95.6781 14.7722C93.0757 12.8857 90.3523 11.233 87.5182 9.72694C82.9854 7.3182 78.2084 5.55407 73.234 4.38601C70.496 3.74308 67.676 3.39566 64.8735 3.09752C62.5055 2.8456 60.1048 2.71122 57.7271 2.78878C54.8804 2.88164 52.046 3.18755 49.2357 3.79871C45.3142 4.65148 41.5875 5.99127 38.1357 7.98875C35.666 9.41783 33.3061 11.0586 31.0091 12.7562C29.4419 13.9145 27.9947 15.2619 26.6217 16.6511C23.5308 19.7786 20.7046 23.1336 18.5102 26.9693C17.0608 29.5026 15.5769 32.0229 14.2791 34.6339C13.2865 36.6309 12.4614 38.7269 11.7416 40.8401C10.8238 43.5349 9.97764 46.2649 9.30905 49.0301C8.82427 51.035 8.665 53.1201 8.38827 55.1732C8.29077 55.8966 8.24034 56.6305 8.22897 57.3606C8.18742 60.0281 8.58983 62.6255 9.45699 65.1561C10.7015 68.7879 11.8294 72.4618 13.1602 76.0611C14.3724 79.34 15.9908 82.4373 17.8444 85.4126C19.6269 88.2738 21.785 90.815 24.2684 93.0689C26.5526 95.1421 29.0249 96.9666 31.6957 98.5444C34.6712 100.302 37.787 101.686 41.0906 102.668C43.4466 103.368 45.8279 103.935 48.2939 104.088C49.6219 104.17 50.9485 104.395 52.2735 104.378C54.8964 104.345 57.5214 104.242 60.139 104.069C64.1269 103.806 68.1065 103.425 71.9734 102.333C75.7709 101.261 79.3542 99.7383 82.5006 97.2872C84.674 95.5939 86.4735 93.5954 88.0355 91.3185C89.0477 89.843 90.4338 88.6298 91.5703 87.2324C92.9568 85.5278 94.2573 83.7534 95.644 81.9333C95.7003 81.7859 95.7075 81.7145 95.7146 81.643C95.639 81.6857 95.5634 81.7283 95.4878 81.771C93.6844 84.0548 91.6581 86.1173 89.5091 88.083C87.027 90.3532 84.3322 92.3463 81.4392 93.9965C78.621 95.6041 75.6152 96.905 72.6231 98.1794C69.6292 99.4545 66.4405 100.142 63.247 100.717C61.6127 101.011 59.9375 101.098 58.2764 101.218C56.8634 101.32 55.4403 101.426 54.0283 101.369C50.4452 101.222 46.8824 100.831 43.4538 99.7187C41.3287 99.0293 39.1591 98.3692 37.1825 97.3577C34.8983 96.1888 32.7095 94.7744 30.6557 93.2317C28.7796 91.8225 27.0164 90.2118 25.4337 88.4795C24.1745 87.1012 23.2249 85.4298 22.2044 83.8457C19.8551 80.1991 17.5337 76.533 15.66 72.6092C13.8666 68.8536 12.4528 64.9756 11.6895 60.8623C11.1904 58.1733 10.8913 55.4675 11.1135 52.7576C11.3113 50.3437 11.7 47.9296 12.2129 45.5608C13.148 41.242 14.5384 37.0501 16.4826 33.078C17.9181 30.1451 19.6918 27.3932 21.8373 24.9203C23.3851 23.1362 24.9724 21.3683 26.6985 19.7613C29.141 17.4872 31.8887 15.607 34.8014 13.9527C39.0862 11.5193 43.6743 9.80758 48.2872 8.1654C50.726 7.2972 53.2274 6.56596 55.7483 5.97774C58.5695 5.31944 61.4869 5.24378 64.3549 5.49758C66.523 5.68943 68.6612 6.28271 70.7957 6.77174C73.5334 7.39898 76.2586 8.08272 78.9808 8.77486C82.7791 9.7406 86.4806 10.9739 90.0418 12.6406C92.6503 13.8613 95.1038 15.335 97.3219 17.1352C99.7226 19.0835 101.907 21.2921 103.729 23.8123C105.347 26.0517 107.07 28.2417 108.437 30.6307C110.086 33.5112 111.602 36.5022 112.817 39.5865C114.058 42.7368 114.982 46.0283 115.822 49.315C116.41 51.6121 116.681 53.9975 116.984 56.3576C117.232 58.2928 117.353 60.2469 117.466 62.1963C117.568 63.9513 117.629 65.7114 117.625 67.4691C117.615 71.9003 116.659 76.1394 114.962 80.2268C113.401 83.9869 111.448 87.5391 109.409 91.0544C108.065 93.3714 106.913 95.8011 105.544 98.1023C104.644 99.6161 103.577 101.053 102.099 102.095C100.748 103.047 99.4657 104.149 97.9994 104.873C96.26 105.733 94.3437 106.229 92.5293 106.946C91.6602 107.29 90.8492 107.781 89.9255 108.18C89.8197 108.135 89.8004 108.114 89.781 108.094ZM16.321 39.6426C14.9783 43.5404 14.3623 47.5888 14.1263 51.6714C13.9098 55.4159 13.9613 59.1898 14.5918 62.9025C15.1634 66.2689 15.9771 69.5778 17.0666 72.8369C18.5181 77.1788 21.0227 80.801 24.1298 84.0389C26.7551 86.7747 29.5214 89.3757 32.2428 92.0183C33.4101 93.1518 34.7789 94.0035 36.3277 94.4968C37.8341 94.9767 39.3751 95.3478 40.901 95.7667C40.7146 95.4544 40.4663 95.3291 40.2224 95.1957C38.7764 94.4046 37.2753 93.6979 35.8976 92.8015C32.9777 90.9016 30.3706 88.6336 28.0774 85.9868C25.9599 83.5428 24.1484 80.904 22.6605 78.0488C20.7448 74.3727 19.377 70.4976 18.4804 66.4383C17.7188 62.9901 17.4205 59.5038 17.2743 55.9952C17.2386 55.137 17.3512 54.2707 17.423 53.4103C17.5699 51.6476 17.6186 49.866 17.9219 48.1296C18.3292 45.7982 18.8666 43.4828 19.4794 41.1956C20.3363 37.9974 21.7328 35.016 23.328 32.1155C24.621 29.7646 26.2489 27.6669 28.0444 25.7099C29.2958 24.346 30.728 23.1428 32.1212 21.9153C34.7166 19.6287 37.6496 17.8232 40.7106 16.2573C43.324 14.9204 46.0125 13.7157 48.7265 12.5946C51.0738 11.6251 53.474 10.7573 55.9045 10.0223C58.9034 9.11536 62.0407 8.98118 65.1465 8.80099C67.2795 8.67724 69.426 8.75462 71.5656 8.79087C72.2324 8.80217 72.8965 8.97287 73.5619 9.0706C72.7239 8.70885 71.8668 8.44507 71.0004 8.21631C68.59 7.57986 66.1639 7.07226 63.6504 7.02052C60.7371 6.96055 57.9198 7.6046 55.1156 8.19893C50.5829 9.15958 46.2393 10.7555 42.1171 12.8742C39.5087 14.2149 37.0083 15.7643 34.4395 17.184C31.2735 18.9339 28.575 21.2237 26.1316 23.8896C23.912 26.3113 21.9 28.8779 20.2924 31.7203C18.8606 34.2518 17.6821 36.9267 16.321 39.6426ZM91.0357 30.1278C91.0979 30.1124 91.1602 30.097 91.2224 30.0817C91.1575 30.0587 91.0925 30.0357 91.0357 30.1278Z"
        fill="currentColor"
      />
      <path
        d="M78.3891 105.437C78.3024 105.568 78.2465 105.754 78.1246 105.822C76.1023 106.955 74.1474 108.244 71.914 108.929C70.4912 109.365 69.0236 109.688 67.5548 109.935C64.39 110.467 61.1878 110.394 57.9906 110.449C55.7223 110.487 53.4588 110.857 51.1913 110.877C46.8418 110.916 42.6419 110.097 38.6929 108.206C35.9773 106.906 33.1909 105.721 30.5973 104.208C28.1346 102.772 25.809 101.069 23.5579 99.3106C21.5278 97.7249 19.5684 96.0138 17.7774 94.1646C14.7621 91.0514 12.1402 87.6132 9.96821 83.8402C8.0564 80.5192 6.47893 77.0602 5.33739 73.4007C4.53704 70.835 3.90995 68.2419 3.60274 65.5595C3.25452 62.5191 2.92664 59.486 2.98297 56.4191C3.02039 54.3824 2.88836 52.3379 3.01727 50.3087C3.16371 48.0035 3.54796 45.7145 3.77079 43.4129C4.00079 41.0372 4.56942 38.7423 5.31954 36.4904C6.45111 33.0934 8.01422 29.8807 9.92111 26.868C11.9039 23.7354 14.0187 20.6785 16.2205 17.6952C17.8432 15.4964 19.9663 13.7562 22.1496 12.1146C25.6078 9.51457 29.3036 7.30234 33.1546 5.33882C35.9652 3.90579 38.7554 2.43277 41.5694 1.00658C42.4275 0.571729 43.3343 0.233238 44.2871 0C42.4845 0.91795 40.6757 1.82385 38.8815 2.75777C37.5149 3.46911 36.1001 4.11626 34.825 4.96892C32.5326 6.50194 30.2151 8.03369 28.1189 9.81419C25.8321 11.7566 23.7288 13.9274 21.6516 16.1002C20.1458 17.6753 18.6876 19.3272 17.4326 21.1035C15.5944 23.7051 13.8899 26.4084 12.2501 29.1414C9.90813 33.0448 8.27552 37.2785 6.99385 41.6257C6.22983 44.2171 5.65787 46.8841 5.24684 49.5552C4.85563 52.0975 4.69528 54.686 4.60218 57.2603C4.52241 59.4659 4.52911 61.6966 4.76575 63.8872C5.29975 68.8303 6.32512 73.6788 8.3503 78.2549C9.42257 80.6778 10.5383 83.0861 11.7514 85.4407C12.9916 87.8477 14.7172 89.9253 16.5697 91.8902C17.7789 93.1728 18.9469 94.5026 20.2386 95.6974C23.4964 98.7108 27.0125 101.38 30.8683 103.61C34.3706 105.636 38.021 107.307 41.9178 108.358C44.4236 109.034 46.9955 109.484 49.5567 109.926C50.7097 110.125 51.9088 110.058 53.0871 110.108C54.371 110.163 55.6588 110.301 56.9383 110.246C58.6794 110.172 60.4216 110.005 62.1498 109.775C63.992 109.53 65.8095 109.091 67.6538 108.873C69.8315 108.615 71.8661 107.911 73.8957 107.157C75.3635 106.612 76.826 106.052 78.343 105.471C78.3951 105.442 78.3891 105.437 78.3891 105.437Z"
        fill="currentColor"
      />
      <path
        d="M105.04 70.0688C104.9 71.4009 104.899 72.7679 104.596 74.0642C103.983 76.6893 103.359 79.3307 102.458 81.8654C101.216 85.3602 99.4364 88.626 97.0958 91.515C95.4517 93.5442 93.6907 95.5069 91.7854 97.2891C89.4696 99.4554 86.8507 101.269 84.0594 102.797C82.4296 103.69 80.7584 104.506 79.1003 105.346C78.9272 105.434 78.7163 105.447 78.456 105.466C78.389 105.437 78.3951 105.442 78.3938 105.442C81.7911 103.119 85.2045 100.817 88.5784 98.4578C89.4702 97.8343 90.2668 97.0648 91.0603 96.313C92.0799 95.3469 93.0238 94.3006 94.0515 93.3437C95.6902 91.818 96.8864 89.9788 97.9147 88.0221C99.0216 85.9155 100.198 83.8334 101.126 81.648C102.343 78.7848 103.377 75.8421 104.421 72.9091C104.728 72.0458 104.801 71.0992 105.013 70.1318C105.044 70.0729 105.042 70.0719 105.04 70.0688Z"
        fill="currentColor"
      />
      <path
        d="M87.929 109.585C86.1891 110.665 84.4492 111.745 82.7092 112.825C82.664 112.754 82.6187 112.683 82.5734 112.612C84.282 111.567 85.9906 110.521 87.785 109.5C87.8901 109.544 87.9096 109.565 87.929 109.585Z"
        fill="currentColor"
      />
      <path
        d="M87.8416 109.493C88.4401 109.028 89.0677 108.595 89.7381 108.128C89.8003 108.114 89.8197 108.135 89.8679 108.187C89.2697 108.651 88.6425 109.084 87.9722 109.551C87.9095 109.565 87.89 109.544 87.8416 109.493Z"
        fill="currentColor"
      />
    </svg>
  );
};

LogoIcon.propTypes = {
  className: PropTypes.string,
};

export default LogoIcon;
