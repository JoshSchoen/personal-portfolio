import { ComponentStyleConfig, extendTheme, Theme, ThemeConfig } from '@chakra-ui/react';
import {StyledNavLink} from './components/NavLink';


// Add color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};


const AppToolbar: ComponentStyleConfig = {
    baseStyle: {
      w: '100%',
      mx: 'auto',
      maxW: '960px',
      px: [4, 6],
      py: [8, 10],
    },
    defaultProps: {
      colorScheme: 'gray',
    },
  };

export const theme = extendTheme({
    colors: {
      brand: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      allenEdmonds: {
          100: '#999999',
          400: '#666666',
          900: '#000000'
      }
    },
    components: {
        Heading: {
            baseStyle: (props) => (
                 {color: props.colorMode === 'light' ? props.theme.colors.gray[800] : props.theme.colors.white, fontWeight: '300'}
            )
        },
        Link: {
            baseStyle: (props) => (
                 {color: props.colorMode === 'light' ? props.theme.colors.teal[500] : props.theme.colors.teal[300]}
            )
        },
        AppToolbar
    },
    config
  });

// Extend the theme
// export const theme = extendTheme({ config });
