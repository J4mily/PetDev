import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default class Carrossel extends React.Component {
    render() {
        return(
            <Swiper className="swiper=container">
                <SwiperSlide className="slide-item">
                    <img src={require("https://lh3.googleusercontent.com/fife/ALs6j_H-nx0-A3sHmkRABFteaCtWDgD9sa1cBso3srJ8-HHAxooMlr6zuB-XgsF2N7-ocubZBtUKPRZ44M5inMG5Az9R-hRcd2fNH7eFAlJgvAYhSAPRSDTNdblgJYsGQt7p9nJeHTYnVxP4zc88b-7pWsceqLac1CJeTNH9IZqJYn1v59ppIGDJwbyTO4pUmSjgyQ0jvV8T9H6x01hJv0sbLxyQpwQZMb7PHUI6kgHY6Wp3jCAhOvxriaj4ES9vw9UGjdzAbgXb7yfjiMboLpRhLDNcFkseVkwXzw-I4UsZJ0HYFb4q-xCjvQJLL31xE-jJUur_HXVGss8YccdnyW-ZFh-zpz91qCSKVLCnpfI60mEj__7FGaij391PFaZ3boXjiugaqZwWcBHXooCXGt4s9PdxoWfh1P0umkBsioHM2l3IKCkFpbhfe8wGTbjohErr4MmTGkWBIr-zjc9NlKSxZIGPrT97epfLiW5DeI_j7KOd_LT0RjDlIcyUWHRZp_Pij62aAR1qWYatJeeWbzyyy8czJiL0aSCH7rc0Xlw469kNo0e_wfo9jbBZrKc4iem3phO3R5Cad64lKlgAUv34zb2DBrwil_y6Atnl0YEs0-bX9KrJWHBonPXeSqESmALLH4TRMdWV1a1NmwwvJ2G9USzsQzO_kCvfBYREagSvoUsoFPsrwvUfIUEIrew0YKJW0Mrq7aS5jpIXrHh-CRwQSo3K6JLQRjJu5F_4UDsKjbMmECwHXRMcpwmTiGVXcQmVmqO73tjylg64D4ldrkk_JuWo--E8PlnTdUnxlTh_ZcT9__bOVu-PJEY-sKeI8RaVfPOUYlal2YJoObmO9Qoi4BcY3T6k9tKPWxMS5FyGSk1hAMB_du2kEq94xQQ_NTv1-k4UbV2nAGqd8OC089qQdscbgAcXRBhXCE9c5anWs1SdwfC3VJ5xzQN30aZHGHVnMcZapivyozVQSySQapWipbMHnyxxlTFHtmIhU1GZ5FZ9FEfkbOZ7TTujd7o714dhGKcwfW79bRCPeNGmqHxi5OYeTrj2j4BdZorIcfPQRVcr1_Im6_e223P_8pcy5OhX2lQ4QhWX0g2IkO1_ogJLlNUqJag_8nUquNxoCC9qmGjfv7GjaMAjRJW8m_Ro0F6x55AzYHXI0mz6NvhJK-sPJpJcjxYZvg-ADDidoAvTMsazrK57dKfxy5ZtBs_5LN7FmcgOP_QMRIj6TJv6GU2umuatB6Y3rvgzx9vPVgyYDf7Ceq7a3mm9cYhlYnoBT84fM6TNtSiq7lUD57R7dz8isxAVgSdd4lyaK4K9zOE_okefemh0ZdgMAS1ABQNHHQAbnBod1ep4rUvHIJi6BzNxAm-2PNto9yj1Lpqyr9hvqw8LankfFn5A_PsfwIq0dnq0WYYUxrvOgv54V5isybB9jvyQrjjxOhMfSccKHeuAHvmgkuld_cU-39YW88M0hTn6gTrvYtZDqrt-hsYd1BcY6XpQ5CCPgT29tHjcd7D4IuQV-QbRX-4ko2Xdx_5crsLCrSTfGWnuagRSYEhegl6NMBqBcgH27UHIwedxTlyEG1RJtLLy93ZTXFmIc32cyfhPXXC4wcCUF4DNKg=w1358-h646")}
                    alt="card gato" />
                </SwiperSlide>

            </Swiper>
        );
    }
}