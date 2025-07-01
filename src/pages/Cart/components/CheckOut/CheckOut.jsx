import InputCustom from '@components/InputCommon2/Input';
import { useForm } from 'react-hook-form';
import styles from './Styles.module.scss';
import cls from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Checkout() {
  const dataOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
  const CN_BASE = 'https://countriesnow.space/api/v0.1';
  const { container, title, coupon, leftBody, rightBody, row, row2Column } =
    styles;
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm();
  console.log(errors);

  // lay ra list country
  useEffect(() => {
    axios.get(`${CN_BASE}/countries/iso`).then((res) =>
      setCountries(
        res.data.data // [{name:'Afghanistan', Iso2:'AF'}, …]
          .map((c) => ({
            value: c.name,
            label: c.name
          }))
      )
    );
  }, []);

  // chon quoc gia de lay list city
  useEffect(() => {
    if (!watch('country')) return;

    if (watch('country') === 'Vietnam' && !localStorage.getItem('listCities')) {
      axios.get('https://provinces.open-api.vn/api/?depth=2').then((res) => {
        localStorage.setItem('listCities', JSON.stringify(res.data));

        setCities(
          res.data.data.map((item) => ({
            label: item.name,
            value: item.codename
          }))
        );
      });

      return;
    }

    if (localStorage.getItem('listCities')) {
      const data = JSON.parse(localStorage.getItem('listCities'));

      setCities(
        data.map((item) => ({
          label: item.name,
          value: item.codename
        }))
      );
      console.log(data);
    }
  }, [watch('country')]);

  useEffect(() => {
    if (!watch('cities')) return;

    if (localStorage.getItem('listCities')) {
      const data = JSON.parse(localStorage.getItem('listCities'));
      const statesCustom = data
        .find((item) => item.codename === watch('cities'))
        .districts.map((item) => ({
          label: item.name,
          value: item.codename
        }));
      setDistricts(statesCustom);
    console.log(statesCustom);

    }

  }, [watch('cities')]);

  return (
    <div className={container}>
      <div className={leftBody}>
        <p className={coupon}>
          Have a coupon? <span>Click here to enter</span>
        </p>

        <p className={title}>BILLING DETAILS</p>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className={cls(row, row2Column)}>
            <InputCustom
              label={'First Name'}
              type={'text'}
              isRequired
              register={register('firstName', {
                required: true,
                maxLength: 25
              })}
            />
            <InputCustom
              label={'Last Name'}
              type={'text'}
              isRequired
              register={register('lastName', {
                required: true,
                maxLength: 25
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Company Name (optional)'}
              type={'text'}
              register={register('companyName')}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Country / Region'}
              dataOptions={countries}
              isRequired
              register={register('country', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Street address'}
              type={'text'}
              isRequired
              register={register('street', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'apartment'}
              type={'text'}
              isShowlabel={false}
              register={register('apartment')}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Town / City'}
              dataOptions={cities}
              isRequired
              register={register('cities', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'State'}
              dataOptions={districts}
              isRequired
              register={register('state', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Phone'}
              type={'text'}
              isRequired
              register={register('phone', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'ZIP code'}
              type={'text'}
              isRequired
              register={register('zipCode', {
                required: true
              })}
            />
          </div>

          <div className={row}>
            <InputCustom
              label={'Email Address'}
              type={'text'}
              isRequired
              register={register('email', {
                required: true
              })}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className={rightBody}></div>
    </div>
  );
}

export default Checkout;
