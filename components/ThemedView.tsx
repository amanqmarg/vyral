import { View,Text ,type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { LinearGradient } from 'expo-linear-gradient';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return(
    <LinearGradient
      colors={['#bdb3f4', '#eee9ff']}
      style={style}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      {...otherProps}
    />
  )
}
