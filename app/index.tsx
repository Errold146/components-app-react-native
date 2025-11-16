import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import { MenuItem, ThemedView } from '@/presentation'
import { View } from 'react-native'

export default function ComponentsApp() {
    return (
        <ThemedView margin>
            {
                animationMenuRoutes.map((r, idx) => (
                    <MenuItem 
                        key={r.name} 
                        title={r.name}
                        icon={r.icon}
                        name={r.name}
                        isFirst={idx === 0}
                        isLast={idx === animationMenuRoutes.length - 1}
                    />
                ))
            }

            <View className='my-5' />

            {
                uiMenuRoutes.map((r, idx) => (
                    <MenuItem 
                        key={r.name} 
                        title={r.name}
                        icon={r.icon}
                        name={r.name}
                        isFirst={idx === 0}
                        isLast={idx === uiMenuRoutes.length - 1}
                    />
                ))
            }

            <View className='my-5' />

            {
                menuRoutes.map((r, idx) => (
                    <MenuItem 
                        key={r.name} 
                        title={r.name}
                        icon={r.icon}
                        name={r.name}
                        isFirst={idx === 0}
                        isLast={idx === menuRoutes.length - 1}
                    />
                ))
            }
        </ThemedView>
    )
}