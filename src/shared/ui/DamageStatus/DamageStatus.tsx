import style from './DamageStatus.module.scss';

interface IDamageStatus {
  damageShipImages: Array<string>,
  misImages: Array<string>
}

function DamageStatus({ damageShipImages, misImages }: IDamageStatus) {
  return <div className={style.damageStatus}>
    <div>
      {damageShipImages && damageShipImages.map((src: string, index) => {
        return <img
          key={index}
          src={src}
          alt="damage"
        />
      })}
      {misImages && misImages.map((src: string, index) => {
        return <img
          key={index}
          src={src}
          alt="miss"
        />
      })}
    </div>
  </div>
}

export default DamageStatus;
