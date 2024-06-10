import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.rodape}>
      <div>
        <img
          src="https://lh3.googleusercontent.com/fife/ALs6j_F9Fx8nZ0e281RhVi1Z5AY-LYX0H1udM3tuf8xlF5UHB79_zLcj8X0vshiGHgOIJVeM71ADmcP8Z5ABRtl7RY51cA1gJUppYcXMV2pDqs04Suw6qUwjYgf3slrG_Ab5vfjvr2p7SKA2xTr9l5Dg2VXb4rYZElferhPUz0cpKTZ-pHIhcyOrk3lUeYRE5RC6N-Nx3ma4-ClkiMc0TmboUJGSwqFxnob6OxsdAP6tn2vflIIDMgFfToo2-6auPMh4GDh6VZDKGwlvr2w_xQhwN8Zhhfys9xdAjLgQHFv2ACaA1Z11we_sEm-UbAD50-j2FMW7KVEKU34RO9jvE5e7pG7aDGT_-bOfOGyidTm2_gLWVoVdxQU_rjDUZnARuCFdZ2_SSAMYp6R5_0mXAuQSgKRxGcS_c3Gmcw2z7z8H4gmpQTtcU9cN7hf7W-fdT9SvcrCXV6YLTV9M2RjamUzRSzm3dOrTafwJO2ggpo9T5b-BAG6FkqABOlOb03bqe9OF7iZSE91E7IR47Aa7FaM_ouwAZXxmx0JaX90hNuk1Dl3uKcu0znRGR1XnCkfh7sj21VB83-uqaah2GTEUR5ffVYhpXQlrtoHEBFVqgiIogVKeYT3pQTOgBxSzb7RRMG4aV9rkr3J3nmEpIvXZuIqqVuPZf0nxG6BQjMxcX17ewOP2oJwp2a95IH5j2xCySkATJxBvJvAfqw0XEKyj3OAHzOomERciIakhEOl1wI66Wi4gjNkBAe307rbCgwBMl-m_EW1lKGcTEakW-gUJEEaoc3c-ZzHkl4EolmNU-0ssVkS6BNOcBAYQ_Uz6-f8WEn-kRpVs8WUGtdaC-3-IZHFOdTLDJ8SoQ6FrFnFfQzKIE3FW2ExTcfFz-UFRio0vbNOTGP-SUBeFUpU6hqrE7cHCGVzfpecJ7aCw6KEry-BHpGZe6zKCiX9UmmQQn8-Y0yoovFqPrJs1ZCc7-cH-T3kLd8WYYQtR-7sRRtcibSL4enDDvaaEZYuRQGAeQyRjEC-ndUnDx9sDbc-eEkJqvDx-OADl20GfwJGNp43JcnG01SJ0RP3Ytoqozmk52kMao-TvvfekuiwmYwM5n836a8wp61CvH_teqt1BNRgFLTqrozS6BF8ehbzp7jbyuWh0eTELRIqUsViFUmfsrnq8dKGgcE-xFs2PpVYWSeMsmHy1RR7KZHe-LOHXZBR6l6l2pH9IN_EzyM0MeFqroTNLp4VAUqpZUaLcQfAQVhvIE72BlepJLJauCskCd_2KCOyZsV9YgiwKbPcQK2dqL_Epbe9Hir_cs8LOQ4jWAMn3CTLx1w8-JxaNFEwN7-URs27QEdgGjplvP3dUziLhg3yhIJ0U0wsxnjmBfEH9Wewdg3FvAwnYcvqG5ZWn-rICBEZrK2E_LvcMu_JdbhM9wBunpWAvPCESMDidjztxqzouyud40TuR0C6Y7QOY3qLqiryL6Os1A52wRWpHSJRRCWRFjFHVIRLXQe-wkE2KSb2FkKd8_Cxadmu5xt3YW06B2MtdVgrzpMKcrOuzZZiMMeIcjEYjLyz8dLVf8TKsdWLSPJVd9Kq-xbAQDccH6xgPvFYxKOqbgy3nUGYT0mBK0uaBbQ=w1358-h646"
          alt="O logo do PetDev"
          data-testid="navbar-item-logo"
          className={styles.logo}
        />
      </div>
      <h3 className={styles.contato}>
        Contato
        <br />
        31 2199-3515
        <br />
        contato@petdev.com
      </h3>

      <h3 className={styles.informacoes}>Informações</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/Animais">Animais</Link>
        </li>
        <li className={styles.item}>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Sobre">Sobre</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Sugestoes">Sugestões</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Depoimentos">Depoimentos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
