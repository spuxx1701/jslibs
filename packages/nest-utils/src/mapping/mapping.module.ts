import { Logger, Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    AutomapperModule.forRootAsync({
      useFactory: async () => {
        try {
          const { sequelize } = await import('@automapper/sequelize');
          return {
            strategyInitializer: sequelize(),
          };
        } catch (error) {
          Logger.verbose(
            'Failed to import @automapper/sequelize. Falling back to @automapper/classes.',
            MappingModule.name,
          );
          return {
            strategyInitializer: classes(),
          };
        }
      },
    }),
  ],
})
export class MappingModule {}
