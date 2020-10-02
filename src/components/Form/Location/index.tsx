import React, { FunctionComponent, memo, useContext } from 'react';

import Select from '../Select';

import { FiltersContext } from '../../../providers/FiltersProvider';

import { ILocation } from './interfaces';

import './location.scss';

// location
const Location: FunctionComponent<ILocation> = ({ filters }) => {

  const filtersContext = useContext(FiltersContext);
  const { result, onChange }: any = filtersContext;

  // render
  return (
    <div className="location">
      {filters && filters.map((value: any, index: number) =>
        <div className="location--item" key={index}>
          <Select
            item={value}
            onChange={(e) => onChange(e, value.id, result)}
            placeholder="Selecione uma opção" />
        </div>)}
    </div>
  );
};

export default memo(Location);

/*
<div className="location--item" key={1} data-disabled={values.city.value === ''}>
          <Select
            options={inputs.districts}
            label={values.district.label}
            placeholder="Selecione uma opção"
            onChange={(e) => onChange(e, 'district')} />
        </div>

        <div className="location--item" key={2} data-disabled={values.district.value === ''}>
          <Select
            options={inputs.council}
            label={values.council.label}
            placeholder="Selecione uma opção"
            onChange={(e) => onChange(e, 'council')} />
        </div>

        <div className="location--item" key={3} data-disabled={values.council.value === ''}>
          <Select
            options={inputs.neigh}
            label={values.neigh.label}
            placeholder="Selecione uma opção"
            onChange={(e) => onChange(e, 'neigh')} />
        </div>

        <div className="location--item" key={4} data-disabled={values.neigh.value === ''}>
          <Select
            options={inputs.zone}
            label={values.zone.label}
            placeholder="Selecione uma opção"
            onChange={(e) => onChange(e, 'zone')} />
        </div>




      {inputs.districts && <Select
        key={1}
        options={inputs.districts}
        label="Distrito"
        value={values.district.value}
        placeholder="Selecione uma opção"
        onChange={(e) => onChange(e, 'district')} />}

      {inputs.council && <Select
        key={2}
        options={inputs.council}
        label="Conselho"
        value={values.council.value}
        placeholder="Selecione uma opção"
        onChange={(e) => onChange(e, 'council')} />}

      {inputs.neigh && <Select
        key={3}
        options={inputs.neigh}
        label="Freguesia"
        value={values.neigh.value}
        placeholder="Selecione uma opção"
        onChange={(e) => onChange(e, 'neigh')} />}

      {inputs.districts && <Select
        key={4}
        options={inputs.zone}
        label="Zona"
        value={values.zone.value}
        placeholder="Selecione uma opção"
        onChange={(e) => onChange(e, 'zone')} />}

        */