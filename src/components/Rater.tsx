import {FC} from 'react'
interface Props {
    starsNumber?: number;
    maxRate?: number;
    rate: number
}
const Rater: FC<Props> = ({starsNumber=5, maxRate=5, rate}) => {
    //return HStack of star icons
    //several filled stars, possible half filled star, empty stars
    //normaliztion of stars distribution
    //normalized stars number = starsNumber * rate / maxRate
    //number of filled stars = integer part of normalized value (example: normalized 2.5 => 2 filled stars)
    //condition of half filled star - if fractional part greater or equal 0.25 and less than 0.75
    //if fractional part less than 0.25 then number of filled stars will be only integer part
    //if fractional part greater than 0.75 then number of filled stars will be integer part + 1
  return (
    <div>Rater with {starsNumber} {maxRate} {rate}</div>
  )
}

export default Rater