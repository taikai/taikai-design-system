import React from 'react';
import { ActionsMenu, Icon } from '../..';
import { ActionMenu } from '../actions-menu/types';
import * as Styles from './styles';

interface TableOption<CellDataType> {
  id: string;
  value: string;
  dataKey: string;
  renderer?: (value: any, data: CellDataType) => JSX.Element | null;
  className?: string;
  dataTestId?: string;
}

export interface TableOptions<CellDataType> {
  columns: TableOption<CellDataType>[];
}

interface TableProps<CellDataType> {
  options: TableOptions<CellDataType>;
  values: CellDataType[];
  actions?: ActionMenu<CellDataType>[];
  dataTestId?: string;
  menuDataTestId?: string;
  actionMenuTestId?: string;
}

interface CellBaseType {
  id: string;
}

const Table = <CellData extends CellBaseType>(props: TableProps<CellData>) => {
  const {
    options,
    values = [],
    actions = [],
    dataTestId = 'table-test-id',
    menuDataTestId = 'table-action-menu',
    actionMenuTestId = 'icon-button',
  } = props;

  const { columns = [] } = options;
  const hasActionMenu = actions.length > 0;

  return (
    <Styles.TableWrapper data-testid={dataTestId}>
      <thead>
        <tr>
          {columns.map(
            ({
              id = '',
              className = '',
              value = '',
              dataTestId: colDataTestId = null,
            }) => (
              <th
                key={id}
                className={className}
                data-testid={colDataTestId ? `th-${colDataTestId}` : null}
              >
                {value}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {values.map(row => (
          <tr key={row.id} data-testid={`row-${dataTestId}`}>
            {columns.map(
              ({
                id = '',
                dataKey = '',
                className = '',
                value = '',
                renderer = null,
                dataTestId,
              }) => (
                <td
                  key={id}
                  className={className}
                  data-label={value}
                  data-testid={`td-${dataTestId}`}
                >
                  <div>
                    {renderer
                      ? renderer(row[dataKey as keyof CellData], row)
                      : row[dataKey as keyof CellData]}
                    {className === 'kai' ? (
                      <Icon icon="kai" fill="hsl(0, 0%, 16%)" />
                    ) : null}
                  </div>
                </td>
              )
            )}

            {hasActionMenu && (
              <td className="menu" data-testid={menuDataTestId}>
                <ActionsMenu
                  actions={actions}
                  data={row}
                  dataTestId={actionMenuTestId}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Styles.TableWrapper>
  );
};

export default Table;