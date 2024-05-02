import Button from "../../componentes/botao/Button";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    
    <div className={styles.titulo_home}>
      <h1 className={styles.h1}>
        Qual é a sua maior curiosidade
        <br />
        sobre o seu animal favorito?
      </h1>
      <p className={styles.p}>
        Explore exatamente o que você deseja saber!
        <br />
        Clique no botão "Saiba Mais" para descobrir
        <br />
        mais detalhes sobre a vida do seu pet.
      </p>
      <div><Button texto="SAIBA MAIS" />
      <div className={styles.pet}>
      <div>
      <h2>E aí, qual o seu pet?</h2>
        <ul className={styles.lista}>
          < img src="https://lh3.googleusercontent.com/fife/ALs6j_Hac0RLebaQBa5reRmiPJ78LD-HCDZ4waaE7QfX72sG8-qLnmUPt6vZBbj9-FycZSKj67iywIzlQklobADnZGzjbSc8FYaDvw3xfl1BwbhMzcBvt36Qt_NTqH6iglJ3dfyN8sLhe6gaVEelSFV-IfFM2XvWO9Mg1Qnii9CjNESZSWQBdVPva7FBoZR6hekQa3jBZQnDzPTNJikwlY9xSqBZehjYCZI50Giow52Q4gaOboSBnbtBghVBoHyHy0Kqk9VCnVUqeCTj1fsZ5ysgoOpYmnCgM_yyE1vDezEj91nOCBvoZUddkWM6LSc-sbLrZSLPM8lkbLfM4CcwIVi2yJG54b3KkiqsFq__gORvJnLWsHdheyjYOG_IsuBGtiXMiB6Eom5Gka3q7xcDqn0F4kUt4Ms-vgLixuSVC4lMOnwdRqw9ymJSEvrD3hKHVBQK63Fnj3ZO2JT4NFJJA_y1ucGvzDkpxfx3mqj7GFBSF2Q2HTu0O3XbUvZZPGA23vvR9PyTrs1klJljbWWzgb13-lYgf0iMql2r0hHjTVscMyxtZza-JMUefIBLpIw4KcZ1bp7-P6vEx1IS2QnMnVwdtOXLdVMfuMqRuQRwgVoEk1Nk9484_pkdnXzTc6seXxcmN3ee0OtjKsFdPzsZRQHhhtsOnXqNrgEQalUEC2HUbkiOXlBYB6-sGLURYRS7D7XAax4fQTKr5Acdw_g8AbhmKUeAhr5vuRFfxt4XDqBAleOVvNAFt-ti8MnV219iAWieyBmSDEL6CDGDJpgfc3smhtfetwEsUqVZmhyLbmfOYdFI4dq0KVfv8OSOA467KuCSgKF06Un7W74iJyYyC-FTdj8zQGxdthqS1YfvoyoSZWokirOT7kUi6AEQftyPpO5gSqqFFtBdWjTOvSW7T785UBwELLeOUxwe4CvLN7KQfVh5pje4ezEUK-CDV8Se4IxtCtNnCmbvPO2ejqIqGO3oVZeIDCPvvZGOjE86Pq47s5G88O4icN7otX9ZqQwIV-miSWjdqqAtJW9P64TFHYbSn_SkIUxdIZbUGIlehxtgmDNU2Comjg1ki6gSkb8cq2L2SHiquuTfw2SZ6M6IbL30XnWqgqRUX9omFSjYqicDh2BbshMBMVLaOw-a0jHbbzaQjZM1g7T_f7cc9bF5TsCqVLx7smsOfkRg3XQtZQo0l_Q_j-2uUCE-r_RsjS5SPUy3u78VYKOCUb47ssAVdb-lsNlBwhq5w08I4M6Xb-ksIx9WA9jxgZXMbqTmcskhaMD2q25SrQSioim-muJMZsrQJvXJb6F_J60Hm9MuRRVCY4V8XzwUcOiSMfjeXI7NGmT3tMmq-mjSIn-_6pzk7el7M3BKn5RGZ_fv2pk-UgFQvbGwhT6MLsh9sILBE3xs7cLQo6psIa5T0wwo-YZLXxd6Rpo4T_UtSSU0FAdSqCaqUg8--cD4ZWqCA6DV28ToomVi_5CHER8G2kTHpFC17FEGR3-m0M7vfPPlvvIg5tAGb3OVc1yc9blQ58aWtvDazK801pkXq5q51d4CMYRsMVr1AWhc32q_PK--kLrR1gcG55XfmVZVVg1HOfATbNsMACzBGfR6Y1spsfbkk5xTsw=w1920-h868"
            alt="Ícone pet cachorro"
            data-testid="icone-cachorro"
            className={styles.lista_pets}
        />
          <img src="https://lh3.googleusercontent.com/fife/ALs6j_GTk--3OKw4t4KGJ0fwArt2k12ALDJ2Vl57VbdtTLMF9BLn5WATsjN-bNrAdCzleuS7m9hfroq3OoZMd8QkkqrQBC0qqKFM_I6moF_u0MAvPDFnojRJ5owDlitcxbJb45xhdepKRRJkCUxKrSdXjPQIopJOw4wqKiZbdQ6r_GK-ghyKwRegDBnHOEFWyF5mSQNZ1_GEsi3QlNWn87E6FQd6Vm3NbQhNfWQitU25ClyJA9FlExNsbxRYUKTG_ZcTcJ3jlqUhghsKX4D5FVkCNzgA7gspdMxfzMO9Te2VHx1nhl6_p95tC--rdIV-ng9AGcjEonOOjB-8Z1rlwCzRwl__pnIL5N0x133GJlVKjZtUBg3lcWtCiQgoCsEsoFtt_L455Siw5i3UoOY4TfnA5UO1OJP3d4JBxYXy2Zerf_49dzmy8lVn4JbL5Qym1TwmcIz-uYEC17-CF_30mNdUuUnZ6KIZgbXWy75jVCrfadQYr2KM0qm7lL74CToQN_WUf1sdme4ADmHwR8TNIvP3G64KO_Cl26M3ExQlIjXJ2PG5Gm9k-6ClHHtxKMyjR9D_quasjfsj9gu78pA4t3mgOsUgrp8omUiMQ8mJD0Up2yxcngdEL_BeRCfxembzo3-yel82VT7yWLW-02K9VGyRnsMMf4JFrE4aXg0uDv9XwVDxSUcFwcd8Od8PLTlF2aES44vK9oIDdRccydalVUdAhiwMV0dxfageccP_nTS-qBJsQ-Hh9xpBZHnjdY4gq_CsalupBQrsq1iTcNoBM7zKn5VgaNcliaN7TkuBR4EDks1lNj4dIo5Lx_hNgxJqVdpiOD-286S9XbMYBwB4Um-rVeh1pePywxZb4YCOYIS712qQzT58PTynBvNbB86Pd9t1oK5zR9ip2X9art9KhkpD5yUC53geZXLTusI3848Z8po5ijXT3B8F5_8s8IyH0ApLA8ast8GtEXGIW5SIcNDoZEhSNYvf13pCc7qYBMphSfpwBIKEIqz-ZuHZdIszNfhIC81Dtb_67fj2R7DiJLc1ikW46vmKumDqZuvTtabi8m2xXjd_grkNELpGNeaV7q34yFu2TGQEF798jmt_TjFSJrZ5RUVPhT9uLl6B29FodV6xlzaVDbu55ooYclC4qeOhcZAu_lt6FlL1jpKUrNikTnqw6Bc17fkpTUc4Msohw24SrKisTGIY-OMAd2CmWn2Xk8CL9zx5yyHf7ZR5mrcyHvRMcXS00KlJJneTQvv8QvSC05nF_ervkfLqxWZjc793I7_bImIXN1J4Ead5f4gnkU5RXh2k7cX-Mu87IjsLHseVvMmzRg_UCfSVrMWPBvbHEH99EDb20BE47GmfEoLuw8I_uu-WetUNgi5WCPLnlT7c3DLWUPFeFlD-NS86I5h116OiIkbzfuqEylXKbQcrY_QtqIpEo7Cyc1yfsc5dEY1KKMJArf7c1AVvh19ZkPyZrfUDn0y74c4MbCNdfySDD82wnayO2wSWCPvy3ocerJjQSU97b11uin5YVLiQiY8FGvbszU0kmP9ukfENqAVJPPoMiSn6gfZ_JQcisTOwJ0bt9s0htJBWeDigXeCrCPfvvqfBIGimLGSbiuA=w1920-h868"
           alt="Ícone pet gato"
           data-testid="icone-gato"
          className={styles.lista_pets}
          />
          <img src="https://lh3.googleusercontent.com/fife/ALs6j_Hv2huOezTFU9yMwzfSMgSN5j7FaoyRHuGjYZJ2xDhZhkDwbfZt4ekxaxn2aRG0QKkb0fPyULuFZ7VsbEGZ4oFghdZ0xOlGOxjGC3tdGHls9__1CvjmUUSzy5vGWYe5cLBj3PqZqxp--jQSx3gtbAAxkKxSw1f8Zhx93mjttNfAI2gzPll3GGAgCjOisX_lPCY6lX3MNZn074fnv9WrlDVgGRRoKkfrY2Sd_Jcvnm_Oxe4o4gvwB_feusx1fAvtKRz6k5aLUAyGUiM3T-XOlPZMRs-10jTvmKz09J1SthGBRIu29t4E6ouioHahsSLSNRZ6VjvXhiX3_C--N8DTMieDc8lhrgnkNyt7K5K6TOLu-uzJAjKSJAoO8IIAKfcvGfEZ9EjnSIFLrWc-jQD_iojqajXzHNzMDUdys4DagMJte_33FYzcDupPseGgMWsEMn68Will9VBvzzr0yJDPt6meZoaM84gfQMOUxhyGPkPHRZmIutCgd2Zw2Yajj_-TXb9FMFhpTCYv9TPvwYXB4XoJCBFymJDRKQfWxSTn0Plej4oBNdEVpL2hdUq1nHtqmk6AGHBf-EQx_9JzikolEISZLx6spxQBaaQ8T3plnalDrFrkT84-GiMAjIoyOnT6XiXmMEumWbOixqUSDpOFnzzFseknPKRP09vtu6I9kUedKEtv8OzJDpzLxl5qK_9Xd1kfIK53lyyFnj1WVbIl6OngfMMX2SFiWKcmOteEaZVjKH8rQS8KdB8FAAHd-lccP6uQ8GDE6Vhu7FlZYuaMowU4AFCeP0qZ22ucH5yA0fbKggryZZSS6ILMp7_HdRhi05gkLVTQ4ESRw0TFanOD04hZx4Gq1Ufq2kbBX1B93d7zbjr_fOLHK9ynj72dkQthiZMIKcfftPKzjcntpYp7XwnmyI75NB6-DmL6yY2bMSS49eFRvYQHiKC79wWi0Kk6sD2FLeDCdWy7sq6EiSEfuTfw5ASeLPcmJq0C1Rswrs3fiFBTHDqhu7gmydriF0sw6Sbz6wivK1NHQ7ZuPsLNaMv5Z7n6FWfMiO6wgElOxm0rv3xk8bYEDwJh2Krktdynkh-9iQlN2v-RJJdv98uCNbiKXg3veBWWQHwFGCmgQt43vU-xfoTJumF5wtAfihN9q29YzBPsyzss37atG98x0w1PelweelpySIq4Kw1ivsVFq57FRLgst4acWEvSGIxCMvt6ijbRDxX_Q8YF_fgA5qwOTsa8sa50sTAlYsnp8qnxNvano4NiWExrZ4Tpmp9rA876D6jx4QnOMcKIKT4QptmSZidGac3Z6hefMy21F7mcDO-N_dSL82PpQKQd8KhxS9cE833jebjS9aQw11JJfk1VazIFzv8nfqHSGmBQqEkvkgiGvgYg_Q4cV0vRCFezVmrtQnD9z1mp-pFmf0nGaAHeJxUeK25n4zq98VUpVlJZLQMWgihOps3tkHyBvrhX9ppx0sWgae9-GhfZMvDHRF2PhLziWcQVo-wkBZrlF5yMzT-dRzDyGMK_ebJEBTTwaV7zj70hTtn19v3Htc7Ztkwkx-8N_y7j5vCITM_4s4AetIyAapkmsc9c5T5FNlCdYYdfWYEvnqWntzvdsQ=w1920-h868"
          alt="Ícone pet pássaro"
          data-testid="icone-passaro"
         className={styles.lista_pets}
         />
         <img src="https://lh3.googleusercontent.com/fife/ALs6j_HJD5HtpjpZZJVwH5IT0h_YGCc8RTcfk1aX-TUz7B_lnSDtDSvo07lsy3f46fFRSHS_FZZFt0CpnDTPx6CuyZWfkX5SP405kwh_8EDT35MSJhYo6suj6dKzxDOqzWpSldg975nknT2smj20mcNq0vNvfnqSvPpOvlbgS3kCFHsoDAYjEJiSMxm5Cn3WYjsvz0e8RGDXTkQmTvKEVoJtn2jz3CdHMYmoveCzYC63lTVEbM4bHk_iVfdg2aOXMP2V9KJgvRd_0_J6mD9IkQ7EtR6YmxtT-WSRLKOmZNcexHcwUJpQKW3jrsmrri2ZX5XBhDupkbYUiE4Zo0pzQjb7_ph9E-_SFrGMf2b_C5qac_ZpUGxt0FB4Atf_6geKROwVfvCbTX6KwgnvgJTS4GQ7j0IUj5jbK16odMMgaddIMX49J-dXFiYlBsLr0WXSdWM6kzQ8L1n3WRZK7FRui08bXQsnQUbj-KlsRrj9YN8SShQ6Hy_atkJdrFqMJq-47uE3Mxane0SHBuxMX7FbrO6BI39Ji7_cg4r240kLSpjTYhycw8o5oTKU5Qh7WfUqxHJvqvdnU9YHLvXZCPuUHO6-URbI4bUZ57fpNCqUSmzPeEn3Y5p2an2diJGaRn9uneivarv4ZaBI3JqkSIzQU75s_HJT6SnVBSoNLfwP62LvG8f9Uc9HSzmiieOIRJYJunnCvYCXKiNgRV0wxqKDLRcOAbEWAIpq4K9HbghtmZqzun0mFSEIvBow7LkgxTNGtRXr8UbovINsqEvpdZu6jyh3Lmr7KUruyIRO5KUEkYaAewZbxmQHkWu7ThwI2Krr7ZsNw2k_BH0GcTAQF718MBqjMxweubGrsrC6Pq-Zzc-1MpsHbYuS9k9-JgnmRJMsPeRuLW62vvxl0sx4rDwrRMa8a3tT6YJTgz2yUWOwGpJHMC_WdnhfGOhZB3mxAZ6a1GXyP9utZQglcxroKgRoBKvsnvwyJnRhDe1lNh1uw358UDfBPedZO2k1Lnu3zfSi6BTlpU5kDOS_EvD8EMzc-tq9a3GdqbJur-du4O1wbapZb8_UEA6RCQv9AVhiFeTflhJGBR7VcUknNta-ebc1msDWLA2Cbh5ImMR7JzhnSEZhKW4zNvvHlVbG109zX4R58d5Jyx5Gc1F4kNYDRnHjcUVz20BWDfTAN4ObbVjLW7JPsSgs9TQY6jPiq8g4S_aezdYa9XO4qFb8QFP-F3DK6Bt7QWwWeH-yPu2X31DZ7TNrAFETz8jMcqBywpdNhwGl7zt5kTGRMCl6ZvPpZK1r50vsmGHDzy1Y1G0PGmAvMuNgrC2CC2Y5rjX4AEVywDypQ06M_ZFmUxKU7Jij_-JolqijgSXKQzduIjKIf3Rzr5WoQoqb4-E7jIewdG5OQAmKdejvaptzpbTG3udFx_vDPyTegaEvtiB9CIolFqGlYF6sr_lTnU8EwIY86vRslgoH9uVGT3f0RQgbE_AcnMmmDt-tgtnsMK6bhr5kLaZwoegMTLUvjeew3-1ygliR2nedIhBbySE37PhIERaMt2GSafupGlQAdirRluh77xWX1nvUzqlZKPRU-YBmPDekE_FMk1tK1oTWOLVx5PWKbiM=w1920-h868"
          alt="Ícone pet roedor"
          data-testid="icone-roedor"
         className={styles.lista_pets}
         />
          <img src="https://lh3.googleusercontent.com/fife/ALs6j_HxWcMtwhUoKrL6C2hwcJta6fJ6FpIhgqYQkUbiXoR5Aejo7Byeym2wlujKBh_NSEHSy4KbnnbAYBWGKGnI1UDUCmRQlgaRhNJtyR89GzN04_XUHgFUqTywxlSNMMY1SiuIwzZE6ql7HHbGUujWrfHGqMJ1K20jSCz2Vp1J7KwolZ3Ncwd1Wd26DkSTYnaRg3sO5BI2Zyv6m9_QC-7y55mkrtSj-4yEtlqfJuYiKSDPMyEJ5GNsaxPlKkEJs_ocrm-Xa6oA7pQPAD0QZVzP85Y_H44r_EZzlvp5C9hgSefFc75LhqK8w4SH4aMe2f5-7DPxqdhWV9p7V8w0nqHDLc__FLRDx6QRkSGjZh9EF6beTFgKQwdnCAZcTIMdDJmPXXyyA0RCxJUNmEzDczXAq5Xe-tWt07OkZIpCod4QKT3oss1LkRyBxX-HPy9khb7mOaynk4TWVb6xNVy3ySboyV8L5YX9qY72S3_1TqSft8fSxo4V_pvQOrFuqfFv69mLANmO11D1MYFuOnfq-MyUt0krpQpMXZzb5GpSB0SrnADo0zmJrClDA2khL92a5fRAdGGAIn2Ew_1Cu5rEbuhwgdlXciHitg-v8itL8534VY5YI-IUZ_bbxMMOQfgApRNfOyv0bPsjv13xBhiFpraJgRYC-qNJtPL5TWk4q5cUa-wSUtsnRk-H5cS4w54208p0GrJIa0XgprDwQeorq86Ap_FoNJ9HSjpVsIGpaSAL4C9WwMtOC-tvQlt0YxnXPsTIhM3oqx8AulldaTWUEqnP5QGfS-2nau9O1JZCyreoQkGw1G9JIPs-9bRj9S2iw0-VjEl2hUx2DyrxqkMDOqa_9jiaB1r-DUPSHkX-ISzCXLJXarW5kM5X8GNMJSfxqAAKQzkb5skziUg8hqPBnch3EeTi9KBdwZAfMz_d_o1PZgY0mBgQSd4nEQHH--ObeBrz6-qG8hqNWj5_y4KHtYyrAvdG9guEnSlvip_U99yH9inCKU-abo0kidzUr89xFI_fHV724SBs6h-HOsTeVgmLlUYCEEDLr1q8hTnF5XxTpPSW3_Rm_X9ZaJ0HkMdtDbdVylHWNdBzyVIkgPaNXS-akZckZ9XdSViXG5pEtQuMLLFbzWBVWLclNG0q0un2gLIANS8qp4fAbtM0y40Sv_KsBwSEPQ7s8aqjq_EBivKztVf2mLFmNhBswfDt3lQFGC2TawiJizr5KPiBfm5l04ALbXs4xEe21QMoe5gdwKq4T5L32iAhoaywCbuJF9faK7-Y5cvIQt1dQd0EuVvSBGD42Mi103DGRe28zi-dYlG3ThJ5IzTIFh0QdIoK5xSRxyPmstnkKqq1wZcvQEDPrlw5JhqFoP_r8iy9Yn06WIkHlUVL9DyBuzqnSc1TcCOhES3_LjkOJkU-kSshdIi1P8FamtxZ9wrMPEj_I-_0u2hipj4wBq3y2GMN2PFG76_tM5v3-DxuMVXJ6HO0vW2FxTpqgVQ6kdSscSrjDNtAmFo7pc2aFy9LeC_xqwm7mi4mak1PwUVg_Yzl4Besicud1PeA2HIVRLc1cr0ySQ4a-7n6wtyVido4FV2Vz2F02yYC_ziRiSNzzANTFXHhts1l1w=w1920-h868"
          alt="Ícone pet peixe"
          data-testid="icone-peixe"
         className={styles.lista_pets}
         />
         <img src="https://lh3.googleusercontent.com/fife/ALs6j_GQGL9Oe9NIES9FvtebCkNwy9b8TtJ0bsvIzj0ld2WTIrBKyFyU594mWgwCA4P8UN3jUA6xli8UVJ7owFEBK6hWDnnme7JkAw_1389wLPfUviDTAxeRO98_cBMPZV-djkbOBLVLpCM799-7AMIWSPKSEy3ihCuuNwmC5YUxwQW9UoLqchepj6cFra5IiEC0sqZ8ONFYRP0Z98hLT5d4qoayKnkYO9vBkyddyS-dlgtRUdd06-bBKE4OUiLE_8TkaZnkWMlDMn_lscWm-oEb9JvbY3EcxutxU8gIbJjLrSgy57xYhQ9Lwhe6Z2y2JZMrwYYemSkI3irdGJYH6zEeFzratMYA9NCilTbgT8QP9rFzthrJg2hQBjIM-rOOKY8LWMf0zK6kA31HgQWs_j4P0oadtXeRjC-BXxPBaDHxYGugWExRW2WcRz82ze74MGXOPRuRSuT4XTDYEcaroxJzWo5HEw_T3rZf-e9Ep-sjJC2xkx2DMt6_8mIr6vQeiPhNud-ANRUYwRzHIK5BAkWo3CQSsGYRKl52-bQi8IXElqnoteUGx8HCRl53HekVtPrk3O8TPVJTMmK0KD7JrtXlOlxkHZC9HklN0ua6Ol9FOH2Vvaxozh6S1O6rc2aOEhYN0lk54JTkSWjrZdkn1q1ZP1w8et4jZJ8GzqwNWgdVB2zsnSmRuFooLUoyKXF3SFgvDJnNGbNdgs9pvYinHXcrKJNMk_dp3EuDoDeIbNNisTkl3_Sn5FjZ1vtGeZk93fJqfdFfo1vmb4N-b9ESBO1c73p0i8VH40COrRyZPP2MJtT8K8xdH1hYE8aJxD7tWju65-tOCeWd3vwEVlZ3WGI-wxeZVwlzlCPMjDd6VFOEzW5vqptINu2_ZlojBGh4wpCtL4OEwiD9E0pwS-uSBGoCGiGq56nXZ97hnWZ0LXahO8QfbvaZJoIBwMmpGljCS2RdVd-1sRtYuCVJCo1cZuyyXIv1_caE6XqEe17Cu3sMQPq4NN3tm2_zx8cAltttHrdQMXBiqqf42v4bQbfY7obgAmYyLX55Asbnna5XmT4wFXJdWGAjN4igDahXah6Ylvz64ernNzATGwFo1G1nd2iix4TzGbgBtTvUSoTnFUll354TTPkdpHm8ZoQZtUe9X9r2GbSGXET8ZUN2-QUJr_sbwUmZiOj0scBLGaEXL9hmQ0TI9X0zFrbEtiT9ZC9UkxbtGzQ5MSKkyDQmPtD53cxT3_T9eZSKMsPTD5dYRWHwR3PJCrvqYHJ-b2-QgDrDBkaaA_J9K4Onv17Hbwa47sYIX4YAYNKzmvkQEWTZY2Vv2X1g_A3TKFVjv7n5hlHu-aGR2uy7BV3AomZo_6Ke19yZyAhC_kGOD0VRKEFL4_o7Ef_diihCuldjnfPo9xB4xFf6jXQz9NG3AwzZWCLcehbarxwSm5vhcY_BUMsu8Ox7ZGfru-XvbNLEZrDy_CoDSvCPnqWbeea1dMBkwD6Lv62uQlI1BHEB3d4poirqKLV9X1JhbYypKrpPMQQ5ct_2HJI5Ucc_JuxZkrCKs9F02MpFUsga0jFs8ib8qirGH5HBIdGTRmG3r4b0HvI8ESbgMWktM1lWDO6lt_mp2izuBg=w1920-h868"
          alt="Ícone pet macaco"
          data-testid="icone-macaco"
         className={styles.lista_pets}
         />
         <img src="https://lh3.googleusercontent.com/fife/ALs6j_F_OMFjKYzn8Kye5EAvjKy_JfMJP5JK_gaVyGB_ly5A8bVj3NZnOIEQdICdpjkdvkW57c5gdoEjva75b6F-6n52vMtU6vbSndvQUb9Xuzp7BS5WNKqgjGuFKv1Km7wPp6PxZVvDD8Mj74GktBAwu3GaMKdwoylvtwxGeihoc5N_SNTQ4honeU65ZUW_XViPgXw0TTCb4JFAa1bLmygmRVGrL8LJQaWbsTNig6YGzbHinu6E4m63qvA9eQpWMWoEb4pe5rfY9fPXKiML77JckplrqP8eLI-b85kaanKOk_SODyOICXnbPCQNpe88Wg7kpJPAn4tC3P-qoCX6P4XnLAP2Rqhi9cFonGiFelrVd79_zAz91Zzqg4LSz9ebDNWx_TE4xV7jQEl3OmQeJD-Goutj4EHAMxaqJS9yYjJe7cpOFJz0j50WyGrlviy2T6wfLMk2vLyB1UOsv1LzMUopsjGMa3rLrDqklMfzcLct8N-w7j0_HzzaIi9P9SeZTivcLNFjEBggXyGTRivxU5Js74IIoUNJMOMIlk-JE1htvhfigIYejSimJk8vIPEWH3RUiH_FLfmm0cxZeiQgbL184xzpaIEy9eF_Sj-8VrhlgvWTqXXsv18h_4aVcZgOztbgFbjcLtRvQ2eP2Y1vJLqdvH3JH0hZt-gxA377z9MIRmwrwdBqWvE3PF8LoiowzwtyFo3msPIawwavo8LPVzPrkln_zGUuKcHnuK5nTYJWGhQw-JPWN0wrwiMidW_IanFdII2GdiClZI3vhju21pBCF75Baj3wq-u5jPGKqrXgiSePbGU_9NbWBLJ_oE7p9M41CppmlOhfMQR_F8THNG1tM_vqBzInOVizPpwJZKTy1rVRVs2Cxsy6p92dLWz0_XtbpCbdH18Tze4aZgqwAKmdklzWR_JxW0IDwbU-C6y2-tL5N17tASghqF3pa62e0-oQemOTn0E42LxGNpyaHslaXhAqfTfZDrApQu8tGVMNVwNy8mFVYxQSk-9goBoTrxJuMkCLKrJh-ElBnBNT2fBVplJzp6P1hVozVOvPNc-_xOYEisO9a8q5zMJEcGXn_0-xhwYUuziOqBMeVatoYqNCTxDruXC6zzGtO5KzF7nDu6HO_umRjJ2pQ53Esmx6a3zi7_GR3X1A6MsMOggGZGLQ1DuY8UiVGE6Tlf53yDIUvWWkJn9raLIw1M6uCt10DRBqvIbcBXSa2rBvbK9vHEEcUbcMKgOMF7hSt0NAMbLoXlOnHRJ-ZidO14lgIaxPvquzjeQH7myTfe6BLdnWPL2P7qdA9C48hD63wv-Fq-GYgSdRR-H1dWFJmKyAX7XXC2iCjajpRmpMtZB6FSey5tW5f2xTFsW1xw7CJ67Trz_WlmVFd_Udom8DMEBZOdLCvASIVyj5UMPSCfej2vmVyG3oyCO5CddFRdZHl9JmzzRKkpI-30ccN1-QHytsV5h_RRPRfNR5mwBrCp18Wt0MzZYc3ffMnd0oubQ2Vchqhx-Dyj3G-J6aA3IhfIG9OB1dEBPdpJTAHbwxO0wo_baJw0Bw4hkxKdcMZQwx0HK5O5KET4jSB-nn1BGq5CRRXdiw124P3yul5e9-HzaM42bE_g=w1920-h868"
          alt="Ícone pet cobra"
          data-testid="icone-cobra"
         className={styles.lista_pets}
         />
       </ul>
      </div>
      <div className={styles.cachorro}>
      <img src="https://lh3.googleusercontent.com/fife/ALs6j_Gyy7nIy-FSTMpk-6f5u8ymD-K_J8QDeF2hzbphsCEIVbFxWhdgwnaXo2F7z5zhD5JAEQtR1i9GB1zFPo79wxa0LHABAc4Y0q81MT0lKR5iRo3xQYZ4k_TRFEi7HswUiYonzELqs728zo0bm99DncSuuOFA0ZfSczv5iylajLfK4ZhUqwCrWSj0Bxpag2vN65UkmSsoCciDhpI2ovNBW_GICQBygWhN-jP3ERfbt8sY5tldL6jtcOdjc3Hbu_BK01_5dcBwQx2RifNl5vCqapyfk-wfdo6z0OpoRIiOeftimOMdMGZ7RfSiIevaug5bIu-sg_Lk3auEHMtlG9nwK8uCYfmyihDMP0934kLm-KwOuFwodFjeYgNg-7jX6jy3_PdTMeSQKUuP_E9bOZ_M2FWKHOB7O-pMSeorGaLSv_Egu48z8KF-c3vu1Pnu5b4tNOEEDx7l7wZ4qoRu2CGj7ilu8Zkb8slLnipzsmrgowHhyr4cih81duHpzfKr9dhRsSn8yZohY8nyRGZybCMv5IB1mJwtbGjvk6iPi-rNKcevOg7zXQSj-tNSsSo5EISOFSmr8WGPBH6KQuAVV1EZOwY2ULmYeJ25H5L__TfFCG8Sazo3Yk2tZrsrCYP73U1yynnaZ4a_FzvYUdlmip2ks9UNyTqTWJ9xHpMIXJH0NANKdGPwqt6LMvHVG9B0y15SqAC9wbLb-f2BGivgfbEY2ikPswneXbkVXmNmcsZ-PDLZtq2uVQ1TKU0xxm8X0fuBAAm3U193TvvZvdz9xs8ekwAgoOL_TkLDr3jyoR1zZnf3SuxFmw_ZJvJ9aMkSnaHFu8Er2WRoZHCeb79fQrwF1rZ-lXEgNUyuNYagQcKxsuRxWHa9E1ixR0YFlkAbmAAxeES6H2lT3bZ3XINqrXU-G9T_wZRZPSd5M_nNNe4Jf0xVAKcG0IDGo16rLUunt6RD3FV_tFMo7ntmR_iBsMp993Kcg9D2FrLMBRcMv35FLsV0HXQLmfm0rIaAvn39z5l5KSsQxaJSrmHG4VpWIC5d2JrGC3y-dNcQ3j43pEuhW0uVxis38qx0WTEuCLBWHM2jSgYlzk56JBZd1hNhZ0_RqeXa2VzfsbYy4Ok9nAb_FPk6G5GbfnaeNa9Et6B6jPwE2kYDQHjdIhtJ3u48_D36uUQ8qd-w03mCk9nkp7lApZDdWmgLeczvwUugWt8qndKHNPkZqsEaiVCy_bijyuqAIsW25Qz1K5eq_Fq-Uo28MOkscHTCs8RoCOcukhrOGgPDr41NO45gQ-gYEdlQ4x5_GnD81-RpSL_7HrSgMgF41SHeAuGr8-oxliXOMHTZtsD07rQWjQIcBGk4mU8SkgVj_IBbGj606NUsTV0laxgFDIrrpEBnqNuErdYJVHf2ZHM2bmLmGyjLRbfU0S1BF-EUtn9XxN2Lt7qawmCRdRKGKRae9Kq4xNUzb_Hbd526Ys34RD6gC6WCC-kvc4clY9uXlCGYQbL4DOtMdcVzLphnIAVIAxUaisKlomj-nImAnN3cXeW-rI1GfIBmn_j2mcxdu0vkpv4y7xAitAMvhfFQ52KYFiiXzGzVCmL-9vZqgBInnO3_Xoi49r_PVzv1bw=w1920-h868"
            alt="Cachorro da tela home"
            data-testid="cachorro-home" />
      </div>
      
      </div>
      
     </div>  
      
      
    </div>

    
    
  


  );
};

export default Home;
