import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AssetsService } from './assets.service';
// import { CreateAssetDto } from './create-asset.dto';

@ApiTags('Assets')
@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() assetDto, @Req() req) {
    return this.assetsService.createAsset(assetDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllAssetsOfUser(@Req() req) {
    return this.assetsService.getAssets(req.user);
  }
}
