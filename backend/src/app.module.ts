import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosModule } from './cursos/cursos.module';
import { TemasModule} from './Temas/temas.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://electrictiesto:OzRIMlCDq5OhRVBI@cluster0.c9wxd9o.mongodb.net/ExamenWeb?retryWrites=true&w=majority&appName=Cluster0'),
    CursosModule,
    TemasModule,
  ],
})
export class AppModule {}

