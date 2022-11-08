import { useState, useEffect } from "react";
import styles from "../../styles/restaurant/RestaurantLogin.module.css";
import UpButton from "../../components/upButton";
import UpInput from "../../components/upInput";
import UpDropdown from "../../components/upDropdown";
import { packageServices } from "../../constants/package-services";

const RestaurantLogin = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "",
    address: {
      city: "",
      county: "",
      street: "",
    },
    takeaway: "",
  });

  const [companyOfficial, setCompanyOfficial] = useState({
    name: "",
    identity: "",
    phone: "",
    email: "",
  });

  const [restaurantManager, setRestaurantManager] = useState({
    name: "",
    identity: "",
    phone: "",
    email: "",
  });

  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    // get cities from server from  TR
    setAllCities([
      { plate: 34, name: "İstanbul" },
      { plate: 6, name: "Ankara" },
      { id: 35, name: "İzmir" },
      { id: 11, name: "Bilecik" },
    ]);
  }, []);

  const changeRestaurantName = (restaurantName) => {
    setRestaurantInfo({
      ...restaurantInfo,
      name: restaurantName,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftArea}>
        <div className={[styles.bigRow, styles.bigRowFirst].join(" ")}>
          <UpInput
            value={restaurantInfo?.name}
            placeholder="Restoran Adı"
            onChange={changeRestaurantName}
          />
          <UpDropdown data={allCities} />
        </div>
        <div className={[styles.bigRow, styles.bigRowSecond].join(" ")}>
          <UpDropdown data={allCities} />
          <UpDropdown data={allCities} />
        </div>
        <div className={[styles.bigRow, styles.bigRowThird].join(" ")}>
          <UpDropdown data={packageServices} />
        </div>
        <div className={styles.agreementPart}>
          <p>
            UpSpoon bu bilgileri sadece başvurunuzu değerlendirmek için
            kullanacaktır. Bilgileriniz başkalarıyla paylaşılmayacaktır.
          </p>
          <hr />
          <div className={styles.agreementApproveContainer}>
            <p>
              Yukarıdaki bilgileri Şirket adına hareket etmeye tam yetkili
              Şirket Yetkilisi olarak sağlamakta olduğumu ve bu bilgilerin
              eksiksiz, doğru ve güncel olduğunu teyit ederim. Getir, ilgili
              bilgilerin doğruluğunu, güncelliğini ve hukuka uygunluğunu kontrol
              etmekle yükümlü değildir. Bu kapsamda ortaya çıkabilecek
              durumlardan sorumlu olacağımı(zı) kabul, beyan ve taahhüt ederiz.
              Kişisel verilerinizin işlenmesi hakkında Aydınlatma Metni için
              <UpButton href="/restaurant/privacy-policy">tıklayınız.</UpButton>
            </p>
            <UpButton>Tamamla</UpButton>
          </div>
        </div>
      </div>
      <div className={styles.rightArea}>
        <img
          src="/images/upspoon-logo.png"
          alt="upspoon-logo"
          width={120}
          height={120}
        />
        <h4 className={styles.rightAreaHeading}>
          En iyi restoranlar artık GetirYemek'te, şimdi başvur!
        </h4>

        <p
          className={[styles.rightAreaText, styles.rightAreaTextFirst].join(
            " "
          )}
        >
          Dünyada benzeri olmayan iş modeliyle market alışverişi
          alışkanlıklarını değiştiren Getir, şimdi de yemek sipariş
          alışkanlıklarını değiştiriyor!
        </p>

        <p
          className={[styles.rightAreaText, styles.rightAreaTextSecond].join(
            " "
          )}
        >
          GetirYemek’teki seçili restoranlar arasında siz de yerinizi alın;
          işinizi daha az maliyetle büyütün, müşteri memnuniyetinizi artırın!
        </p>
      </div>
    </div>
  );
};

export default RestaurantLogin;
