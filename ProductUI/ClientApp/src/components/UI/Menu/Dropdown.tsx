import { Button, Menu } from '@mui/material';
import React from 'react';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { messages } from '../../../Messages';
import { useTranslation } from 'react-i18next';

interface Props {
  damageOptions: Record<string, any>[];
  handleChange: any;
  damageData: any;
  currentIndex: number;
  getValues: any;
  imageSide: string;
}

export const Dropdown: React.FC<Props> = ({
  damageOptions,
  handleChange,
  damageData,
  currentIndex,
  getValues,
  imageSide,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [subAnchorEl, setSubAnchorEl] = React.useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);

  const open = Boolean(anchorEl);
  const subOpen = Boolean(subAnchorEl);
  const { t } = useTranslation();

  const handleSelectClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const handleDamageSelection = (subDamage: any) => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    damageData = { ...subDamage, damageSide: imageSide };
    handleChange(damageData, `damageDetails[${currentIndex}]`);

    let amountPaid = 0;
    let totalCost = 0;
    getValues('damageDetails').map((damage: any, idx: number) => {
      // console.log('Under Warranty Check:', getValues(`damageDetails[${idx}].isUnderWarranty`));
      totalCost += damage.amount;
      if (!getValues(`damageDetails[${idx}].isUnderWarranty`) || getValues('serviceType') === 'repair') {
        amountPaid += damage.amount;
        // console.log('Amount Paid on Selection:', amountPaid);
      }
    });

    // console.log('SELECTED DAMAGES:', damageData);
    handleChange(amountPaid, 'amountPaid');
    handleChange(totalCost, 'totalCost');
  };

  const handleDamageClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    event.stopPropagation();
    setSubAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
  };

  return (
    <div className="select-container">
      <Button
        variant="outlined"
        id="dropdown-button"
        onClick={handleButtonClick}
        aria-controls={open ? 'damage-dropdown' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDown />}
      >
        {damageData['damageType']
          ? `${damageData['damageType']} - ${damageData['subDamageType']}`
          : t(messages.repairBookingForm.damageDetails.selectDamageType)}
      </Button>
      <div>
        <Menu
          onClick={(event) => handleSelectClick(event)}
          id="damage-dropdown"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'damage-dropdown',
          }}
          onClose={handleDropdownClose}
        >
          <div className="dropdown">
            {damageOptions.map((damage, index) => (
              <div key={`${damage.damageType}-${index}`}>
                <Button
                  onClick={(event) => handleDamageClick(event, index)}
                  endIcon={<KeyboardArrowRight />}
                  className="damageType"
                >
                  {damage.damageType}
                </Button>
                <div>
                  <Menu
                    id="subDamage-dropdown"
                    open={subOpen}
                    anchorEl={subAnchorEl}
                    MenuListProps={{
                      'aria-labelledby': 'subDamage-dropdown',
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    onClose={handleDropdownClose}
                  >
                    <div className="dropdown">
                      {selectedIndex !== -1 &&
                        damageOptions[selectedIndex].subDamages.map((subDamage: any) => (
                          <Button
                            key={subDamage.damageID}
                            className="damageType subDamageType"
                            onClick={() => handleDamageSelection(subDamage)}
                          >
                            {subDamage.subDamageType}
                          </Button>
                        ))}
                    </div>
                  </Menu>
                </div>
              </div>
            ))}
          </div>
        </Menu>
      </div>
    </div>
  );
};
