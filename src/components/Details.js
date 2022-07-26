
import {Typography , Button , Stack} from "@mui/material"

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Details = ({exercise_detail}) => {

    const {bodyPart , gifUrl , name , target, equipment} = exercise_detail
    const extra_detail = [
        {
            icon : BodyPartImage,
            name : bodyPart
        },
        {
            icon : TargetImage,
            name : target,
        },
        {
            icon : EquipmentImage,
            name : equipment,
        }
    ]

    return (
        <Stack>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                {name}</Typography>

                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                Exercises keep you strong.{' '}
                <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                <br /> mood and gain energy.
              </Typography>

              {extra_detail.map(item => (
                  <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                    <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                        <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
                    </Button>
                    <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                        {item.name}
                    </Typography>
                  </Stack>
              ))}

            </Stack>
            
        </Stack>
    )
}

export default Details