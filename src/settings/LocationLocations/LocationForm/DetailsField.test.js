import React from 'react';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import '../../../../test/jest/__mocks__';
import buildStripes from '../../../../test/jest/__new_mocks__/stripesCore.mock';
import {
  renderWithRouter, renderWithReduxForm
} from '../../../../test/jest/helpers';

import DetailsField from './DetailsField';

const parentResourcesMock = {
  locations: {
    records: [
      {
        locations: [
          {
            campusId:'62cf76b7-cca5-4d33-9217-edf42ce1a848',
            code: 'KU/CC/DI/A',
            id: '53cf956f-c1df-410b-8bea-27f712cca7c0',
            institutionId: '40ee00ca-a518-4b49-be01-0638d0a4ac57',
            isActive: true,
            libraryId: '5d78803e-ca04-4b4a-aeae-2c63b924518b',
            metadata: {
              createdDate: '2021-10-28T03:23:16.749+00:00',
              updatedDate: '2021-10-28T03:23:16.749+00:00',
            },
            name: 'Annex',
            primaryServicePoint: '3a40852d-49fd-4df2-a1f9-6e2641a6e91f',
            servicePointIds: ['3a40852d-49fd-4df2-a1f9-6e2641a6e91f'],
            servicePoints: []
          },
          {
            campusId:'62cf76b7-cca5-4d33-9217-edf42ce1a848',
            code: 'KU/CC/DI/M',
            id: 'fcd64ce1-6995-48f0-840e-89ffa2288371',
            institutionId: '40ee00ca-a518-4b49-be01-0638d0a4ac57',
            isActive: true,
            libraryId: '5d78803e-ca04-4b4a-aeae-2c63b924518b',
            metadata: {
              createdDate: '2021-10-28T03:23:16.718+00:00',
              updatedDate: '2021-10-28T03:23:16.718+00:00',
            },
            name: 'Main Library',
            primaryServicePoint: '3a40852d-49fd-4df2-a1f9-6e2641a6e91f',
            servicePointIds: ['3a40852d-49fd-4df2-a1f9-6e2641a6e91f'],
            servicePoints: []
          }
        ]
      }

    ]
  }
};

const renderDetailsField = () => {
  const component = () => (
    <DetailsField
      resources={parentResourcesMock}
    />
  );

  return renderWithRouter(renderWithReduxForm(component));
};

const renderContributorField = () => render(
  <Form
    onSubmit={() => {}}
    mutators={{ ...arrayMutators }}
    render={() => (
      <DetailsField
        resources={parentResourcesMock}
      />
    )}
  />
);
describe('LocationDetail', () => {
  it('should render all fields in location details', () => {
    renderContributorField();

    expect(renderDetailsField).toBeDefined();
  });
});
